import { css, html, LitElement, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type {
  HomeAssistant,
  LovelaceCard,
  LovelaceCardEditor,
  HassEntity,
} from './types/custom-card-helpers';
import type { HaBarometerCardConfig } from './types';

export type { HaBarometerCardConfig } from './types';

@customElement('ha-barometer-card')
export class HaBarometerCard extends LitElement implements LovelaceCard {
  @property({ attribute: false }) public hass!: HomeAssistant;

  @state() private _config?: HaBarometerCardConfig;

  public static async getConfigElement(): Promise<LovelaceCardEditor> {
    await import('./editor/ha-barometer-card-editor');
    return document.createElement('ha-barometer-card-editor');
  }

  public static getStubConfig(): HaBarometerCardConfig {
    return {
      type: 'custom:ha-barometer-card',
      entity: 'sensor.pressure',
    };
  }

  public setConfig(config: HaBarometerCardConfig): void {
    if (!config) {
      throw new Error('Invalid configuration');
    }

    if (!config.entity) {
      throw new Error('The entity field is required.');
    }

    this._config = {
      min_pressure: 960,
      max_pressure: 1040,
      ...config,
    };
  }

  public getCardSize(): number {
    return 4;
  }

  protected render(): TemplateResult {
    if (!this._config || !this.hass) {
      return html``;
    }

    const entityState = this.hass.states[this._config.entity];

    if (!entityState) {
      return html`
        <ha-card>
          <div class="missing-entity">
            ${this._config.name ?? 'Barometer'}
            <p class="secondary">Entity "${this._config.entity}" not found.</p>
          </div>
        </ha-card>
      `;
    }

    const pressure = Number(entityState.state);
    const unit = entityState.attributes.unit_of_measurement ?? 'hPa';
    const pressureDisplay = Number.isFinite(pressure)
      ? pressure.toFixed(1)
      : entityState.state;
    const trend = this._computeTrend(entityState);
    const label =
      this._config.name ?? entityState.attributes.friendly_name ?? this._config.entity;
    const needleAngle = this._computeNeedleAngle(pressure);
    const lastUpdated = this._formatDateTime(entityState);

    return html`
      <ha-card>
        <div class="card-header">
          <div class="title">${label}</div>
          <div class="subtitle">${trend}</div>
        </div>
        <div class="dial">
          <div class="dial-face">
            <div class="dial-background"></div>
            <div class="dial-scale">
              ${this._renderTickMarks(
                this._config.min_pressure ?? 960,
                this._config.max_pressure ?? 1040,
              )}
            </div>
            <div
              class="dial-needle"
              style="transform: rotate(${needleAngle}deg); border-color: ${this._config.needle_color ?? 'var(--primary-color)'} transparent transparent transparent;"
            ></div>
            <div class="dial-cap"></div>
          </div>
          <div class="dial-value">
            <span class="pressure">${pressureDisplay}</span>
            <span class="unit">${unit}</span>
          </div>
          <div class="last-updated">${lastUpdated}</div>
        </div>
      </ha-card>
    `;
  }

  private _renderTickMarks(min: number, max: number): TemplateResult {
    const steps = 8;
    const range = max - min;
    const ticks = Array.from({ length: steps + 1 }, (_, index) => {
      const value = min + (range / steps) * index;
      const angle = this._mapValueToAngle(value, min, max);
      return html`
        <div class="tick" style="transform: rotate(${angle}deg)">
          <span class="tick-label" style="transform: rotate(${-angle}deg)">
            ${value.toFixed(0)}
          </span>
        </div>
      `;
    });

    return html`<div class="ticks" aria-hidden="true">${ticks}</div>`;
  }

  private _computeNeedleAngle(pressure: number): number {
    if (!Number.isFinite(pressure)) {
      return 0;
    }

    const min = this._config?.min_pressure ?? 960;
    const max = this._config?.max_pressure ?? 1040;
    return this._mapValueToAngle(pressure, min, max);
  }

  private _mapValueToAngle(value: number, min: number, max: number): number {
    const minAngle = -120;
    const maxAngle = 120;

    const clamped = Math.min(Math.max(value, min), max);
    const ratio = (clamped - min) / (max - min || 1);
    return minAngle + ratio * (maxAngle - minAngle);
  }

  private _computeTrend(entityState: HassEntity): string {
    const trend =
      entityState.attributes.trend ??
      entityState.attributes.pressure_trend ??
      entityState.attributes.barometer_trend;

    if (typeof trend === 'string' && trend.length) {
      const normalized = trend.toLowerCase();
      if (normalized.includes('rising')) {
        return this._localize('ui.card.weather.attributes.pressure_trend.rising') ?? 'Rising';
      }
      if (normalized.includes('falling')) {
        return this._localize('ui.card.weather.attributes.pressure_trend.falling') ?? 'Falling';
      }
      if (normalized.includes('steady') || normalized.includes('stable')) {
        return this._localize('ui.card.weather.attributes.pressure_trend.steady') ?? 'Steady';
      }
      return trend;
    }

    return this._localize('ui.card.weather.attributes.pressure_trend.unknown') ?? 'Stable';
  }

  private _formatDateTime(entityState: HassEntity): string {
    const lastChanged = new Date(entityState.last_changed);

    const formatDateTime = (this.hass as unknown as {
      formatDateTime?: (date: Date, options?: Intl.DateTimeFormatOptions) => string;
    }).formatDateTime;

    if (typeof formatDateTime === 'function') {
      return formatDateTime.call(this.hass, lastChanged, {
        hour: '2-digit',
        minute: '2-digit',
      });
    }

    return lastChanged.toLocaleString();
  }

  private _localize(key: string): string | undefined {
    const localize = this.hass?.localize;
    if (typeof localize !== 'function') {
      return undefined;
    }

    return localize.call(this.hass, key);
  }

  static get styles() {
    return css`
      ha-card {
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        align-items: stretch;
      }

      .card-header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
      }

      .title {
        font-size: 1.2rem;
        font-weight: 600;
      }

      .subtitle {
        color: var(--secondary-text-color);
        font-size: 0.9rem;
        text-transform: capitalize;
      }

      .dial {
        position: relative;
        display: grid;
        place-items: center;
        gap: 12px;
      }

      .dial-face {
        position: relative;
        width: min(260px, 100%);
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.9), rgba(200, 200, 200, 0.4));
        box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.15), 0 6px 12px rgba(0, 0, 0, 0.1);
      }

      .dial-background {
        position: absolute;
        inset: 12%;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(255, 255, 255, 0.85), rgba(230, 230, 230, 0.4));
      }

      .dial-scale {
        position: absolute;
        inset: 8%;
        border-radius: 50%;
      }

      .ticks {
        position: absolute;
        inset: 0;
      }

      .tick {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }

      .tick::before {
        content: '';
        position: absolute;
        top: 6%;
        left: 50%;
        width: 2px;
        height: 12%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.35);
      }

      .tick-label {
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 0.75rem;
        color: rgba(0, 0, 0, 0.65);
        letter-spacing: 0.03em;
      }

      .dial-needle {
        position: absolute;
        bottom: 50%;
        left: 50%;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 6px calc(50% - 18px) 6px;
        transform-origin: bottom center;
        transition: transform 0.8s ease-out;
      }

      .dial-cap {
        position: absolute;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: radial-gradient(circle, var(--primary-color), var(--primary-text-color));
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        box-shadow: inset 0 1px 3px rgba(255, 255, 255, 0.5);
      }

      .dial-value {
        display: flex;
        align-items: baseline;
        gap: 4px;
        font-variant-numeric: tabular-nums;
      }

      .pressure {
        font-size: 2rem;
        font-weight: 600;
      }

      .unit {
        color: var(--secondary-text-color);
        font-size: 0.9rem;
        text-transform: uppercase;
      }

      .last-updated {
        color: var(--secondary-text-color);
        font-size: 0.85rem;
      }

      .missing-entity {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      .secondary {
        color: var(--secondary-text-color);
        margin: 0;
      }

      @media (max-width: 400px) {
        ha-card {
          padding: 12px;
        }

        .dial-face {
          width: min(220px, 100%);
        }
      }
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ha-barometer-card': HaBarometerCard;
  }

  interface Window {
    customCards?: Array<{
      type: string;
      name: string;
      description: string;
      preview?: boolean;
    }>;
  }
}

window.customCards = window.customCards || [];
window.customCards.push({
  type: 'ha-barometer-card',
  name: 'HA Barometer Card',
  description: 'Classic-inspired barometer gauge for pressure sensors.',
});
