import client from '../connection/client';
import { CandleListResponse } from '../models/symbol';
import { PriceHistoryConfig } from '../models/priceHisory';
import { ArrayFormatType, Request, ResponseType } from '../models/connect';
import { PRICE_HISTORY } from '../connection/routes.config';

export async function getPriceHistory(config: PriceHistoryConfig): Promise<CandleListResponse[]> {
  const { symbol } = config;
  let url = PRICE_HISTORY(symbol);
  Object.entries(config).map((entry, index, entries) => {
    const [param, value] = entry;
    if (index === 0) {
      url += '?';
    }
    if (param !== 'symbol') {
      let str = `${param}=${value}`;
      if (entries.length - 1 !== index) {
        str += '&';
      }
      url += str;
    }
  });
  const response = await client.get({
    url,
    responseType: ResponseType.JSON,
    arrayFormat: ArrayFormatType.COMMA,
  } as Request);
  return response.data as CandleListResponse[];
}
