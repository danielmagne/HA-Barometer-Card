import { css, html, LitElement, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { fireEvent, HomeAssistant, LovelaceCardEditor } from 'custom-card-helpers';
import type { HaBarometerCardConfig } from '../types';

@customElement('ha-barometer-card-editor')
export class HaBarometerCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass!: HomeAssistant;

  @state() private _config?: HaBarometerCardConfig;

  public setConfig(config: HaBarometerCardConfig): void {
    this._config = {
      min_pressure: 960,
      max_pressure: 1040,
      ...config,
    };
  }

  protected render(): TemplateResult {
    if (!this.hass || !this._config) {
      return html``;
    }

    return html`
      <div class="form">
        <ha-entity-picker
          .hass=${this.hass}
          .label=${this._localize('ui.panel.lovelace.editor.card.generic.entity')}
          .value=${this._config.entity}
          .includeDomains=${['sensor']}
          allow-custom-entity
          @value-changed=${this._handleEntityChanged}
        ></ha-entity-picker>

        <ha-textfield
          .label=${this._localize('ui.panel.lovelace.editor.card.generic.name')}
          .value=${this._config.name ?? ''}
          @change=${this._handleTextChange('name')}
        ></ha-textfield>

        <ha-textfield
          label="Minimum pressure"
          helper="Dial lower bound (hPa)"
          type="number"
          .value=${String(this._config.min_pressure ?? 960)}
          @change=${this._handleNumberChange('min_pressure')}
        ></ha-textfield>

        <ha-textfield
          label="Maximum pressure"
          helper="Dial upper bound (hPa)"
          type="number"
          .value=${String(this._config.max_pressure ?? 1040)}
          @change=${this._handleNumberChange('max_pressure')}
        ></ha-textfield>

        <ha-textfield
          label="Needle color"
          helper="Any valid CSS color"
          .value=${this._config.needle_color ?? ''}
          @change=${this._handleTextChange('needle_color')}
        ></ha-textfield>
      </div>
    `;
  }

  private _handleEntityChanged(event: CustomEvent): void {
    event.stopPropagation();
    const value = event.detail.value;
    this._updateConfig({ entity: value ?? '' });
  }

  private _handleTextChange(key: keyof HaBarometerCardConfig) {
    return (event: Event): void => {
      event.stopPropagation();
      const target = event.currentTarget as HTMLInputElement;
      this._updateConfig({ [key]: target.value || undefined });
    };
  }

  private _handleNumberChange(key: 'min_pressure' | 'max_pressure') {
    return (event: Event): void => {
      event.stopPropagation();
      const target = event.currentTarget as HTMLInputElement;
      const value = target.value;
      const numberValue = value === '' ? undefined : Number(value);
      this._updateConfig({
        [key]:
          numberValue === undefined || Number.isNaN(numberValue)
            ? undefined
            : numberValue,
      });
    };
  }

  private _updateConfig(update: Partial<HaBarometerCardConfig>): void {
    if (!this._config) {
      return;
    }

    const newConfig: HaBarometerCardConfig = {
      ...this._config,
      ...update,
    };

    this._config = newConfig;
    fireEvent(this, 'config-changed', { config: newConfig });
  }

  private _localize(key: string): string {
    const localize = this.hass?.localize;
    if (typeof localize === 'function') {
      return localize.call(this.hass, key);
    }

    return key;
  }

  static get styles() {
    return css`
      .form {
        display: grid;
        gap: 16px;
        padding: 8px 4px 16px;
      }

      ha-textfield,
      ha-entity-picker {
        width: 100%;
      }
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ha-barometer-card-editor': HaBarometerCardEditor;
  }
}
