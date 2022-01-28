import { Note } from "./model";
import { Request, Response } from "express";

export const createNote = async (req: Request, res: Response) => {
  const newNote = new Note({
    title: req.body.title,
    note: req.body.note,
    userId: req.body.userId,
  });

  try {
    const response = await Note.create(newNote);
    if (!response) {
      res.send({ msg: "Error: unable to create note!" });
    } else res.send({ msg: "Created note successfully!" });
  } catch (err) {
    console.log(err);
  }
};
