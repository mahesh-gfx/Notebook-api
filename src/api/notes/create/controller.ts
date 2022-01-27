import { Note } from "./model";

const createNote = (req: any, res: any) => {
  const note = new Note({
    title: req.body.title,
    note: req.body.note,
    userId: req.body.userId,
  });

  try {
    const createNote = note.save();
    res.json(createNote);
  } catch (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Created Note Successfully...");
    }
  }
};

export { createNote };
