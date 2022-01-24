import { Note } from "./model";

const createNote = (req: any, res: any) => {
  const note = new Note({
    title: req.body.notes,
    note: req.body.sign,
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
