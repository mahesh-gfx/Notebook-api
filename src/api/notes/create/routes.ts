import * as Express from "express";
import { Router } from "express";
import { createNote } from "./controller";

const router = Express.Router;

router.post("/create", async (req: any, res: any) => {
  await createNote(req, res);
});
