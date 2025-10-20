// Minimal runtime shim for custom-card-helpers
// so Rollup and TypeScript both stay happy

export const fireEvent = (_el: HTMLElement, _type: string, _detail?: any): void => {};
export const HomeAssistant = {};
export const LovelaceCardEditor = {};
export const LovelaceCard = {};
export const HassEntity = {};
export const LovelaceCardConfig = {};

// Fake implementation so Rollup sees a value,
// but harmless at runtime. Home Assistant replaces it.
export const getCardHelpers = async (): Promise<any> => Promise.resolve(undefined);