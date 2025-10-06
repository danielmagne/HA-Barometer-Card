// src/types/custom-card-helpers.d.ts
export interface HomeAssistant {
  states: Record<string, any>;
  localize?: (key: string) => string;
  formatDateTime?: (date: Date, opts?: Intl.DateTimeFormatOptions) => string;
}
export interface LovelaceCard {}
export interface LovelaceCardEditor {}
export interface LovelaceCardConfig {
  type: string;
  [key: string]: any;
}
export interface HassEntity {
  entity_id: string;
  state: string;
  attributes: Record<string, any>;
  last_changed: string;
}
export function fireEvent(el: HTMLElement, type: string, detail?: any): void;

// 👇 this line makes the stub visible as the real module name
declare module 'custom-card-helpers' {
  export * from './custom-card-helpers';
}
