import { css, html, LitElement, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { fireEvent, HomeAssistant, LovelaceCardEditor, getCardHelpers } from "custom-card-helpers";
import type { HaBarometerCardConfig } from "../types";

@customElement("ha-barometer-card-editor")
export class HaBarometerCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config?: HaBarometerCardConfig;
  private _helpers?: any; // card helpers cache

  /** Load HA helpers safely once */
  public async connectedCallback(): Promise<void> {
    super.connectedCallback();
    if (!this._helpers) {
      try {
        this._helpers = await getCardHelpers();
        this.requestUpdate();
      } catch (err) {
        console.warn("HA-Barometer-Card: Failed to load helpers", err);
      }
    }
  }

  public setConfig(config: HaBarometerCardConfig): void {
    this._config = { min_pressure: 960, max_pressure: 1040, ...config };
  }

  protected render(): TemplateResult {
    if (!this.hass || !this._config) return html``;
    const cfg = this._config;

    // Only render ha-entity-picker if helpers loaded (so it works with autocomplete)
    const canUsePicker = !!this._helpers && !!customElements.get("ha-entity-picker");

    return html`
      <div class="form">
        ${canUsePicker
          ? html`
              <ha-entity-picker
                .hass=${this.hass}
                .label=${this._localize("ui.panel.lovelace.editor.card.generic.entity")}
                .value=${cfg.entity}
                .includeDomains=${["sensor"]}
                allow-custom-entity
                @value-changed=${this._handleEntityChanged}
              ></ha-entity-picker>
            `
          : html`
              <ha-textfield
                label="Entity"
                .value=${cfg.entity ?? ""}
                @change=${(e: Event) =>
                  this._handleEntityChanged({
                    stopPropagation() {},
                    detail: { value: (e.currentTarget as HTMLInputElement).value },
                  } as any)}
              ></ha-textfield>
            `}

        <ha-textfield
          .label=${this._localize("ui.panel.lovelace.editor.card.generic.name")}
          .value=${cfg.name ?? ""}
          @change=${this._handleTextChange("name")}
        ></ha-textfield>

        <ha-textfield
          label="Minimum pressure"
          helper="Dial lower bound (hPa)"
          type="number"
          .value=${String(cfg.min_pressure ?? 960)}
          @change=${this._handleNumberChange("min_pressure")}
        ></ha-textfield>

        <ha-textfield
          label="Maximum pressure"
          helper="Dial upper bound (hPa)"
          type="number"
          .value=${String(cfg.max_pressure ?? 1040)}
          @change=${this._handleNumberChange("max_pressure")}
        ></ha-textfield>

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
    const value = (event.detail as any)?.value;
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
