export interface OptionChainConfig {
  symbol: string;
  contractType?: ContractType;
  strikeCount: number;
  includeQuotes?: boolean;
  strategy?: StrategyType;
  interval: number;
  strike: number;
  range?: Range;
  fromDate: Date;
  toDate: Date;
  expMonth?: Month;
  optionType?: OptionType;
}

export enum OptionType {
  STANDARD_CONTRACTS = 'S',
  NON_STANDARD_CONTRACTS = 'NS',
  ALL_CONTRACTS = 'ALL',
}

export enum Month {
  JAN = 'JAN',
  FEB = 'FEB',
  MAR = 'MAR',
  APR = 'APR',
  MAY = 'MAY',
  JUN = 'JUN',
  JUL = 'JUL',
  AUG = 'AUG',
  SEP = 'SEP',
  OCT = 'OCT',
  NOV = 'NOV',
  DEC = 'DEC',
}

export enum Range {
  ITM = 'ITM',
  NTM = 'NTM',
  OTM = 'OTM',
  SAK = 'SAK',
  SBK = 'SDK',
  SNK = 'SNK',
  ALL = 'ALL',
}

export enum ContractType {
  CALL = 'CALL',
  PUT = 'PUT',
  ALL = 'ALL',
}

export enum StrategyType {
  SINGLE = 'SINGLE',
  ANALYTICAL = 'ANALYTICAL',
  COVERED = 'COVERED',
  VERTICAL = 'VERTICAL',
  CALENDAR = 'CALENDAR',
  STRANGLE = 'STRANGLE',
  STRADDLE = 'STRADDLE',
  BUTTERFLY = 'BUTTERFLY',
  CONDOR = 'CONDOR',
  DIAGONAL = 'DIAGONAL',
  COLLAR = 'COLLAR',
  ROLL = 'ROLL',
}
