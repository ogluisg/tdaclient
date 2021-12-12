"use strict";
exports.__esModule = true;
exports.Frequency = exports.FrequencyType = exports.PeriodType = exports.Period = void 0;
var Period;
(function (Period) {
    Period[Period["ONE"] = 1] = "ONE";
    Period[Period["TWO"] = 2] = "TWO";
    Period[Period["THREE"] = 3] = "THREE";
    Period[Period["FOUR"] = 4] = "FOUR";
    Period[Period["FIVE"] = 5] = "FIVE";
    Period[Period["SIX"] = 6] = "SIX";
    Period[Period["TEN"] = 10] = "TEN";
    Period[Period["FIFTEEN"] = 15] = "FIFTEEN";
    Period[Period["TWENTY"] = 20] = "TWENTY";
})(Period = exports.Period || (exports.Period = {}));
var PeriodType;
(function (PeriodType) {
    PeriodType["DAY"] = "day";
    PeriodType["MONTH"] = "month";
    PeriodType["YEAR"] = "year";
    PeriodType["YTD"] = "ytd";
})(PeriodType = exports.PeriodType || (exports.PeriodType = {}));
var FrequencyType;
(function (FrequencyType) {
    FrequencyType["MINUTE"] = "minute";
    FrequencyType["DAILY"] = "daily";
    FrequencyType["WEEKLY"] = "weekly";
    FrequencyType["MONTHLY"] = "monthly";
})(FrequencyType = exports.FrequencyType || (exports.FrequencyType = {}));
var Frequency;
(function (Frequency) {
    Frequency[Frequency["ONE"] = 1] = "ONE";
    Frequency[Frequency["FIVE"] = 5] = "FIVE";
    Frequency[Frequency["TEN"] = 10] = "TEN";
    Frequency[Frequency["FIFTEEN"] = 15] = "FIFTEEN";
    Frequency[Frequency["THIRTY"] = 30] = "THIRTY";
})(Frequency = exports.Frequency || (exports.Frequency = {}));
