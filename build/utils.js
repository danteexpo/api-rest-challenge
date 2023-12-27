"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUpdatedDiary = exports.toPostedDiary = void 0;
const types_1 = require("./types");
const isNumber = (number) => {
    return typeof number === "number";
};
const parseId = (id) => {
    if (!isNumber(id))
        throw new Error("Invalid or missing id");
    return id;
};
const isString = (string) => {
    return typeof string === "string" || string instanceof String;
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
const parseDate = (date) => {
    if (!isString(date) || !isDate(date))
        throw new Error("Invalid or missing date");
    return date;
};
const isWeather = (weather) => {
    return Object.values(types_1.Weather).includes(weather);
};
const parseWeather = (weather) => {
    if (!isString(weather) || !isWeather(weather))
        throw new Error("Invalid or missing weather");
    return weather;
};
const isVisibility = (visibility) => {
    return Object.values(types_1.Visibility).includes(visibility);
};
const parseVisibility = (visibility) => {
    if (!isString(visibility) || !isVisibility(visibility))
        throw new Error("Invalid or missing visibility");
    return visibility;
};
const parseComment = (comment) => {
    if (!isString(comment))
        throw new Error("Invalid or missing comment");
    return comment;
};
const toPostedDiary = (object) => {
    const postedDiary = {
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility),
        comment: parseComment(object.comment),
    };
    return postedDiary;
};
exports.toPostedDiary = toPostedDiary;
const toUpdatedDiary = (object) => {
    const updatedDiary = {
        id: parseId(object.id),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility),
        comment: parseComment(object.comment),
    };
    return updatedDiary;
};
exports.toUpdatedDiary = toUpdatedDiary;
