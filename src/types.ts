import type { LovelaceCardConfig } from 'custom-card-helpers';

export interface HaBarometerCardConfig extends LovelaceCardConfig {
  type: string;
  entity: string;
  name?: string;
  min_pressure?: number;
  max_pressure?: number;
  needle_color?: string;
}