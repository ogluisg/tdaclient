import { TdaClient } from './connection/tdaClient';
import { Month } from './models/optionChain';
import { Frequency, FrequencyType, Period, PeriodType } from './models/priceHistory';

const credentials = require('../credentials.json');

const tdaClient = TdaClient.from({
  access_token: credentials.access_token,
  client_id: credentials.client_id,
  refresh_token: credentials.refresh_token, // OPTIONAL VALUE, ENABLES AUTO REFRESH OF ACCESS TOKEN
});

const main = async () => {
  const data = await tdaClient.getPriceHistory({
    symbol: 'TSLA',
    periodType: PeriodType.DAY,
    period: Period.ONE,
    frequencyType: FrequencyType.MINUTE,
    frequency: Frequency.ONE,
  });
  console.log(data, 'data');
  await tdaClient.getOptionChain({
    symbol: 'TSLA',
    strikeCount: 10,
    includeQuotes: true,
    interval: 1,
    expMonth: Month.DEC,
  });
};

main();
