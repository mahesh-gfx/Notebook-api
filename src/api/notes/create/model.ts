import * as Mongoose from "mongoose";

const notesSchema = new Mongoose.Schema(
  {
    title: { type: String },
    note: { type: String },
    userId: { type: String },
  },
  { timestamps: true }
);

const Note = Mongoose.model("Note", notesSchema);

export { Note };
