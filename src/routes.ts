import express from "express";
import {
	getDiaries,
	getDiary,
	postDiary,
	updateDiary,
	deleteDiary,
} from "./services/diaries";
import { toPostedDiary, toUpdatedDiary } from "./utils";

const router = express.Router();

router.get("/", (_req, res) => {
	res.send(getDiaries());
});

router.get("/:id", (req, res) => {
	const diary = getDiary(Number(req.params.id));
	return diary != null ? res.send(diary) : res.sendStatus(404);
});

router.post("/", (req, res) => {
	try {
		const newDiary = toPostedDiary(req.body);
		const diary = postDiary(newDiary);
		res.json(diary);
	} catch (e) {
		if (e instanceof Error) {
			res.status(400).send(e.message);
		}
	}
});

router.put("/:id", (req, res) => {
	try {
		const updatedDiary = toUpdatedDiary(req.body);
		const diary = updateDiary(updatedDiary);
		if (diary != null) {
			res.json(diary);
		} else {
			res.sendStatus(404);
		}
	} catch (e) {
		if (e instanceof Error) {
			res.status(400).send(e.message);
		}
	}
});

router.delete("/:id", (req, res) => {
	const diary = deleteDiary(Number(req.params.id));
	return diary != null ? res.send(diary) : res.sendStatus(404);
});

export default router;
