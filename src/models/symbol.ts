interface Candle {
  close: number;
  date: number;
  high: number;
  low: number;
  open: number;
  volume: number;
}

export interface CandleListResponse {
  candles: Array<Candle>;
  empty: boolean;
  symbol: string;
}
