import express, { Request, Response } from "express";
import menuHandler from "./handler/menu";
const router = express.Router();

router.get("/", menuHandler.getMenu);

export default router;
