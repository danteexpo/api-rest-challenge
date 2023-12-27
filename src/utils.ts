import { Weather, Visibility, Diary, DiaryWithoutId } from "./types";

const isNumber = (number: any): boolean => {
	return typeof number === "number";
};

const parseId = (id: any): number => {
	if (!isNumber(id)) throw new Error("Invalid or missing id");

	return id;
};

const isString = (string: any): boolean => {
	return typeof string === "string" || string instanceof String;
};

const isDate = (date: any): boolean => {
	return Boolean(Date.parse(date));
};

const parseDate = (date: any): string => {
	if (!isString(date) || !isDate(date))
		throw new Error("Invalid or missing date");

	return date;
};

const isWeather = (weather: any): boolean => {
	return Object.values(Weather).includes(weather);
};

const parseWeather = (weather: any): Weather => {
	if (!isString(weather) || !isWeather(weather))
		throw new Error("Invalid or missing weather");

	return weather;
};

const isVisibility = (visibility: any): boolean => {
	return Object.values(Visibility).includes(visibility);
};

const parseVisibility = (visibility: any): Visibility => {
	if (!isString(visibility) || !isVisibility(visibility))
		throw new Error("Invalid or missing visibility");

	return visibility;
};

const parseComment = (comment: any): string => {
	if (!isString(comment)) throw new Error("Invalid or missing comment");

	return comment;
};

export const toPostedDiary = (object: any): DiaryWithoutId => {
	const postedDiary: DiaryWithoutId = {
		date: parseDate(object.date),
		weather: parseWeather(object.weather),
		visibility: parseVisibility(object.visibility),
		comment: parseComment(object.comment),
	};

	return postedDiary;
};

export const toUpdatedDiary = (object: any): Diary => {
	const updatedDiary: Diary = {
		id: parseId(object.id),
		date: parseDate(object.date),
		weather: parseWeather(object.weather),
		visibility: parseVisibility(object.visibility),
		comment: parseComment(object.comment),
	};

	return updatedDiary;
};
