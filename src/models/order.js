"use strict";
exports.__esModule = true;
exports.AssetType = exports.InstructionType = exports.OrderStrategyType = exports.DurationType = exports.SessionType = exports.OrderType = void 0;
var OrderType;
(function (OrderType) {
    OrderType["MARKET"] = "MARKET";
    OrderType["LIMIT"] = "LIMIT";
    OrderType["STOP"] = "STOP";
    OrderType["STOP_LIMIT"] = "STOP_LIMIT";
    OrderType["TRAILING_STOP"] = "TRAILING_STOP";
    OrderType["MARKET_ON_CLOSE"] = "MARKET_ON_CLOSE";
    OrderType["EXERCISE"] = "EXERCISE";
    OrderType["TRAILING_STOP_LIMIT"] = "TRAILING_STOP_LIMIT";
    OrderType["NET_DEBIT"] = "NET_DEBIT";
    OrderType["NET_CREDIT"] = "NET_CREDIT";
    OrderType["NET_ZERO"] = "NET_ZERO";
})(OrderType = exports.OrderType || (exports.OrderType = {}));
var SessionType;
(function (SessionType) {
    SessionType["NORMAL"] = "NORMAL";
    SessionType["AM"] = "AM";
    SessionType["PM"] = "PM";
    SessionType["SEAMLESS"] = "SEAMLESS";
})(SessionType = exports.SessionType || (exports.SessionType = {}));
var DurationType;
(function (DurationType) {
    DurationType["DAY"] = "DAY";
    DurationType["GOOD_TILL_CANCEL"] = "GOOD_TILL_CANCEL";
    DurationType["FILL_OR_KILL"] = "FILL_OR_KILL";
})(DurationType = exports.DurationType || (exports.DurationType = {}));
var OrderStrategyType;
(function (OrderStrategyType) {
    OrderStrategyType["SINGLE"] = "SINGLE";
    OrderStrategyType["OCO"] = "OCO";
    OrderStrategyType["TRIGGER"] = "TRIGGER";
})(OrderStrategyType = exports.OrderStrategyType || (exports.OrderStrategyType = {}));
var InstructionType;
(function (InstructionType) {
    InstructionType["BUY"] = "BUY";
    InstructionType["SELL"] = "SELL";
    InstructionType["BUY_TO_COVER"] = "BUY_TO_COVER";
    InstructionType["SELL_SHORT"] = "SELL_SHORT";
    InstructionType["BUY_TO_OPEN"] = "BUY_TO_OPEN";
    InstructionType["BUY_TO_CLOSE"] = "BUY_TO_CLOSE";
    InstructionType["SELL_TO_OPEN"] = "SELL_TO_OPEN";
    InstructionType["SELL_TO_CLOSE"] = "SELL_TO_CLOSE";
    InstructionType["EXCHANGE"] = "EXCHANGE";
})(InstructionType = exports.InstructionType || (exports.InstructionType = {}));
var AssetType;
(function (AssetType) {
    AssetType["EQUITY"] = "EQUITY";
    AssetType["OPTION"] = "OPTION";
    AssetType["INDEX"] = "INDEX";
    AssetType["MUTUAL_FUND"] = "MUTUAL_FUND";
    AssetType["CASH_EQUIVALENT"] = "CASH_EQUIVALENT";
    AssetType["FIXED_INCOME"] = "FIXED_INCOME";
    AssetType["CURRENCY"] = "CURRENCY";
})(AssetType = exports.AssetType || (exports.AssetType = {}));
