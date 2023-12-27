"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const diaries_1 = require("./services/diaries");
const utils_1 = require("./utils");
const router = express_1.default.Router();
router.get("/", (_req, res) => {
    res.send((0, diaries_1.getDiaries)());
});
router.get("/:id", (req, res) => {
    const diary = (0, diaries_1.getDiary)(Number(req.params.id));
    return diary != null ? res.send(diary) : res.sendStatus(404);
});
router.post("/", (req, res) => {
    try {
        const newDiary = (0, utils_1.toPostedDiary)(req.body);
        const diary = (0, diaries_1.postDiary)(newDiary);
        res.json(diary);
    }
    catch (e) {
        if (e instanceof Error) {
            res.status(400).send(e.message);
        }
    }
});
router.put("/:id", (req, res) => {
    try {
        const updatedDiary = (0, utils_1.toUpdatedDiary)(req.body);
        const diary = (0, diaries_1.updateDiary)(updatedDiary);
        res.json(diary);
    }
    catch (e) {
        if (e instanceof Error) {
            res.status(400).send(e.message);
        }
    }
});
exports.default = router;
