import { css, html, LitElement, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { fireEvent, HomeAssistant, LovelaceCardEditor } from "custom-card-helpers";
import type { HaBarometerCardConfig } from "../types";

@customElement("ha-barometer-card-editor")
export class HaBarometerCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config?: HaBarometerCardConfig;

  connectedCallback(): void {
    super.connectedCallback();
    // ✅ Load helpers once when component is attached
    if (!customElements.get("ha-entity-picker") && (window as any).loadCardHelpers) {
      (window as any)
        .loadCardHelpers()
        .then(() => this.requestUpdate())
        .catch(() => {});
    }
  }

  public setConfig(config: HaBarometerCardConfig): void {
    this._config = { min_pressure: 960, max_pressure: 1040, ...config };
  }

  protected render(): TemplateResult {
    if (!this.hass || !this._config) return html``;
    const cfg = this._config;

    return html`
      <div class="form">
        <!-- Entity -->
        <ha-entity-picker
          .hass=${this.hass}
          .label=${this._localize("ui.panel.lovelace.editor.card.generic.entity")}
          .value=${cfg.entity}
          .includeDomains=${["sensor"]}
          allow-custom-entity
          @value-changed=${this._handleEntityChanged}
        ></ha-entity-picker>

        <!-- Name -->
        <ha-textfield
          .label=${this._localize("ui.panel.lovelace.editor.card.generic.name")}
          .value=${cfg.name ?? ""}
          @change=${this._handleTextChange("name")}
        ></ha-textfield>

        <!-- Minimum pressure -->
        <ha-textfield
          label="Minimum pressure"
          helper="Dial lower bound (hPa)"
          type="number"
          .value=${String(cfg.min_pressure ?? 960)}
          @change=${this._handleNumberChange("min_pressure")}
        ></ha-textfield>

        <!-- Maximum pressure -->
        <ha-textfield
          label="Maximum pressure"
          helper="Dial upper bound (hPa)"
          type="number"
          .value=${String(cfg.max_pressure ?? 1040)}
          @change=${this._handleNumberChange("max_pressure")}
        ></ha-textfield>

        <!-- Needle color -->
        <ha-textfield
          label="Needle color"
          helper="Any valid CSS color (e.g. red, #ff0000, var(--accent-color))"
          .value=${cfg.needle_color ?? ""}
          @change=${this._handleTextChange("needle_color")}
        ></ha-textfield>
      </div>
    `;
  }

  private _handleEntityChanged(event: CustomEvent): void {
    event.stopPropagation();
    const value = event.detail.value;
    this._updateConfig({ entity: value ?? "" });
  }

  private _handleTextChange(key: keyof HaBarometerCardConfig) {
    return (event: Event): void => {
      event.stopPropagation();
      const target = event.currentTarget as HTMLInputElement;
      this._updateConfig({ [key]: target.value || undefined });
    };
  }

  private _handleNumberChange(key: "min_pressure" | "max_pressure") {
    return (event: Event): void => {
      event.stopPropagation();
      const target = event.currentTarget as HTMLInputElement;
      const num = target.value === "" ? undefined : Number(target.value);
      this._updateConfig({
        [key]: num === undefined || Number.isNaN(num) ? undefined : num,
      });
    };
  }

  private _updateConfig(update: Partial<HaBarometerCardConfig>): void {
    if (!this._config) return;
    const newConfig: HaBarometerCardConfig = { ...this._config, ...update };
    this._config = newConfig;
    fireEvent(this, "config-changed", { config: newConfig });
  }

  private _localize(key: string): string {
    const localize = this.hass?.localize;
    return typeof localize === "function" ? localize.call(this.hass, key) : key;
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
    "ha-barometer-card-editor": HaBarometerCardEditor;
  }
}
