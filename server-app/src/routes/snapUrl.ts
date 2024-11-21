import express from "express";
import { createUrl, getAllUrl, getUrl, deleteUrl } from "../controllers/snapUrl";

const router = express.Router();

router.post("/snapUrl", createUrl);
router.get("/snapUrl", getAllUrl);
router.get("/snapUrl/:id", getUrl);
router.post("/snapUrl/:id", deleteUrl);

export default router