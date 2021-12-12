"use strict";
exports.__esModule = true;
exports.StrategyType = exports.ContractType = exports.Range = exports.Month = exports.OptionType = void 0;
var OptionType;
(function (OptionType) {
    OptionType["STANDARD_CONTRACTS"] = "S";
    OptionType["NON_STANDARD_CONTRACTS"] = "NS";
    OptionType["ALL_CONTRACTS"] = "ALL";
})(OptionType = exports.OptionType || (exports.OptionType = {}));
var Month;
(function (Month) {
    Month["JAN"] = "JAN";
    Month["FEB"] = "FEB";
    Month["MAR"] = "MAR";
    Month["APR"] = "APR";
    Month["MAY"] = "MAY";
    Month["JUN"] = "JUN";
    Month["JUL"] = "JUL";
    Month["AUG"] = "AUG";
    Month["SEP"] = "SEP";
    Month["OCT"] = "OCT";
    Month["NOV"] = "NOV";
    Month["DEC"] = "DEC";
})(Month = exports.Month || (exports.Month = {}));
var Range;
(function (Range) {
    Range["ITM"] = "ITM";
    Range["NTM"] = "NTM";
    Range["OTM"] = "OTM";
    Range["SAK"] = "SAK";
    Range["SBK"] = "SDK";
    Range["SNK"] = "SNK";
    Range["ALL"] = "ALL";
})(Range = exports.Range || (exports.Range = {}));
var ContractType;
(function (ContractType) {
    ContractType["CALL"] = "CALL";
    ContractType["PUT"] = "PUT";
    ContractType["ALL"] = "ALL";
})(ContractType = exports.ContractType || (exports.ContractType = {}));
var StrategyType;
(function (StrategyType) {
    StrategyType["SINGLE"] = "SINGLE";
    StrategyType["ANALYTICAL"] = "ANALYTICAL";
    StrategyType["COVERED"] = "COVERED";
    StrategyType["VERTICAL"] = "VERTICAL";
    StrategyType["CALENDAR"] = "CALENDAR";
    StrategyType["STRANGLE"] = "STRANGLE";
    StrategyType["STRADDLE"] = "STRADDLE";
    StrategyType["BUTTERFLY"] = "BUTTERFLY";
    StrategyType["CONDOR"] = "CONDOR";
    StrategyType["DIAGONAL"] = "DIAGONAL";
    StrategyType["COLLAR"] = "COLLAR";
    StrategyType["ROLL"] = "ROLL";
})(StrategyType = exports.StrategyType || (exports.StrategyType = {}));
