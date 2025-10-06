// Minimal runtime shim for custom-card-helpers
// so Rollup doesn't treat it as external
export const fireEvent = (_el: HTMLElement, _type: string, _detail?: any): void => {};
export const HomeAssistant = {};
export const LovelaceCardEditor = {};
export const LovelaceCard = {};
export const HassEntity = {};
export const LovelaceCardConfig = {};