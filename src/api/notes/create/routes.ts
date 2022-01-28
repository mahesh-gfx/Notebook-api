import * as Express from "express";
import { createNote } from "./controller";

const router = Express.Router();

router.use(Express.json());
router.post("/create", createNote);
