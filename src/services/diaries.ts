import { Diary, DiaryWithoutId } from "../types";
import diariesData from "./diariesData.json";

let diaries: Diary[] = diariesData as Diary[];

export const getDiaries = (): Diary[] => diaries;

export const getDiary = (id: number): Diary | undefined => {
	const diary = diaries.find((diary) => diary.id === id);
	return diary;
};

export const postDiary = (postedDiary: DiaryWithoutId): Diary => {
	const { date, weather, visibility, comment } = postedDiary;

	const newDiary = {
		id: Math.max(...diaries.map((diary) => diary.id)) + 1,
		date,
		weather,
		visibility,
		comment,
	};

	diaries.push(newDiary);

	return newDiary;
};

export const updateDiary = (updatedDiary: Diary): Diary | undefined => {
	const index = diaries.findIndex((diary) => diary.id === updatedDiary.id);

	if (index === -1) return undefined;

	const updatedDiaries = [
		...diaries.slice(0, index),
		updatedDiary,
		...diaries.slice(index + 1),
	];

	diaries = updatedDiaries;

	return updatedDiary;
};

export const deleteDiary = (id: number): Diary | undefined => {
	const deletedDiary = diaries.find((diary) => diary.id === id);

	if (!deletedDiary) return undefined;

	const indexOfDeletedDiary = diaries.indexOf(deletedDiary);

	diaries.splice(indexOfDeletedDiary, 1);

	return deletedDiary;
};
