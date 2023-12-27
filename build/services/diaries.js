"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDiary = exports.updateDiary = exports.postDiary = exports.getDiary = exports.getDiaries = void 0;
const diariesData_json_1 = __importDefault(require("./diariesData.json"));
let diaries = diariesData_json_1.default;
const getDiaries = () => diaries;
exports.getDiaries = getDiaries;
const getDiary = (id) => {
    const diary = diaries.find((diary) => diary.id === id);
    return diary;
};
exports.getDiary = getDiary;
const postDiary = (postedDiary) => {
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
exports.postDiary = postDiary;
const updateDiary = (updatedDiary) => {
    const index = diaries.findIndex((diary) => diary.id === updatedDiary.id);
    if (index === -1)
        return undefined;
    const updatedDiaries = [
        ...diaries.slice(0, index),
        updatedDiary,
        ...diaries.slice(index + 1),
    ];
    diaries = updatedDiaries;
    return updatedDiary;
};
exports.updateDiary = updateDiary;
const deleteDiary = (id) => {
    const deletedDiary = diaries.find((diary) => diary.id === id);
    if (!deletedDiary)
        return undefined;
    const indexOfDeletedDiary = diaries.indexOf(deletedDiary);
    diaries.splice(indexOfDeletedDiary, 1);
    return deletedDiary;
};
exports.deleteDiary = deleteDiary;
