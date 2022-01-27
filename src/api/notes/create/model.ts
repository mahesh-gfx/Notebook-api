import * as Mongoose from "mongoose";

const notesSchema = new Mongoose.Schema(
  {
    title: { type: String, required: true },
    note: { type: String, required: true },
    userId: { type: String, required: true },
  },
  { timestamps: true }
);

const Note = Mongoose.model("Notes", notesSchema);

export { Note };
