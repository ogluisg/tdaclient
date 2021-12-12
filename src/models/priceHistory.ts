export interface PriceHistoryConfig {
  symbol: string;
  periodType?: PeriodType;
  period?: Period;
  frequencyType?: FrequencyType;
  frequency?: Frequency;
  startDate?: number; // as milliseconds since epoch
  endDate?: number; // as milliseconds since epoch
  needExtendedHoursData?: boolean;
}

export enum Period {
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5,
  SIX = 6,
  TEN = 10,
  FIFTEEN = 15,
  TWENTY = 20,
}

export enum PeriodType {
  DAY = 'day',
  MONTH = 'month',
  YEAR = 'year',
  YTD = 'ytd',
}
export enum FrequencyType {
  MINUTE = 'minute',
  DAILY = 'daily',
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
}

export enum Frequency {
  ONE = 1,
  FIVE = 5,
  TEN = 10,
  FIFTEEN = 15,
  THIRTY = 30,
}
