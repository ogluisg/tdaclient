import client from '../connection/client';
import { OPTION_CHAIN } from '../connection/routes.config';
import { ArrayFormatType, Request, ResponseType } from '../models/connect';
import { OptionChainConfig } from '../models/optionChain';
import { buildQuery } from '../utils/utility';

export async function getOptionChain(config: OptionChainConfig): Promise<any> {
  let url = OPTION_CHAIN;
  url = buildQuery(url, config);
  console.log(url, 'url');
  const response = await client.get({
    url,
    responseType: ResponseType.JSON,
    arrayFormat: ArrayFormatType.COMMA,
  } as Request);
  return response.data;
}
