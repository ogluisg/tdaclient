import client from '../connection/client';
import { CandleListResponse } from '../models/symbol';
import { PriceHistoryConfig } from '../models/priceHistory';
import { ArrayFormatType, Request, ResponseType } from '../models/connect';
import { PRICE_HISTORY } from '../connection/routes.config';
import { buildQuery } from '../utils/utility';

export async function getPriceHistory(config: PriceHistoryConfig): Promise<CandleListResponse[]> {
  const { symbol } = config;
  let url = PRICE_HISTORY(symbol);
  url = buildQuery(url, config);
  const response = await client.get({
    url,
    responseType: ResponseType.JSON,
    arrayFormat: ArrayFormatType.COMMA,
  } as Request);
  return response.data as CandleListResponse[];
}
