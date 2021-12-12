export interface PriceHistoryConfig {
  symbol: string;
  periodType?: string;
  period?: number;
  frequencyType?: string;
  frequency?: number;
  startDate?: number; // as milliseconds since epoch
  endDate?: number; // as milliseconds since epoch
  needExtendedHoursData?: boolean;
}
