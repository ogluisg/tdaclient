import { TdaClient } from './connection/tdaClient';

const credentials = require('../credentials.json');

const tdaClient = TdaClient.from({
  access_token: credentials.access_token,
  client_id: credentials.client_id,
  refresh_token: credentials.refresh_token, // OPTIONAL VALUE, ENABLES AUTO REFRESH OF ACCESS TOKEN
});

const main = async () => {
  const data = await tdaClient.getPriceHistory({
    symbol: 'tsla',
    periodType: 'minute',
    period: 10,
    frequencyType: 'day',
    frequency: 1,
    needExtendedHoursData: false,
  });
};

main();
