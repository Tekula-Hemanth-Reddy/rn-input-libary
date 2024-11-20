"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = formatDate;
exports.convertDateToTZFormat = convertDateToTZFormat;
exports.getYear = getYear;
exports.getMonth = getMonth;
exports.getDay = getDay;
var moment_1 = __importDefault(require("moment"));
function formatDate(date, format) {
    var dateFormat = "DD-MM-YYYY";
    if (format) {
        dateFormat = format;
    }
    return (0, moment_1.default)(date).format(dateFormat);
}
function convertDateToTZFormat(date) {
    return moment_1.default.utc(date).format();
}
function getYear(date) {
    return +((0, moment_1.default)(date).format('YYYY'));
}
function getMonth(date) {
    return +((0, moment_1.default)(date).format('MM'));
}
function getDay(date) {
    return +((0, moment_1.default)(date).format('DD'));
}
