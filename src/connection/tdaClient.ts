import { Interceptor } from './interceptor';
import client from './client';
import { getAccount } from '../api/accounts';
import { PriceHistoryConfig } from '../models/priceHisory';
import { getPriceHistory } from '../api/priceHistory';
import { CredentialProvider } from '../providers/credentialsProvider';
import { TdaClientBuilder } from './TdaClientBuilder';
import { placeOrder } from '../api/orders';
import { OrdersConfig, PlaceOrdersResponse } from '../models/order';
import { AuthorizationTokenInterceptor } from './authorizationTokenInterceptor';

export interface TdaClientConfig {
  authorizationInterceptor: Interceptor;
}

export interface TdaClientBuilderConfig {
  access_token?: string;
  refresh_token?: string;
  client_id?: string;
  redirect_uri?: string;
  fileName?: string;
  credentialProvider?: CredentialProvider;
  authorizationInterceptor?: AuthorizationTokenInterceptor;
}

export class TdaClient {
  constructor(private config: TdaClientConfig) {
    client.addInterceptor(config.authorizationInterceptor);
  }

  static from(config: TdaClientBuilderConfig): TdaClient {
    return new TdaClientBuilder(config).build();
  }

  async getAccount(): Promise<any> {
    return await getAccount();
  }

  async placeOrder(config: OrdersConfig): Promise<PlaceOrdersResponse> {
    return await placeOrder(config);
  }

  async getPriceHistory(config: PriceHistoryConfig): Promise<any> {
    return await getPriceHistory(config);
  }
}
