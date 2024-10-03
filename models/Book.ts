import { Schema, model, models } from "mongoose";

const BookSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    author: {
      type: String,
      required: [true, "Author is required"],
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    release: {
      type: Date,
    },
    pages: {
      type: Number,
    },
  },
  { timestamps: true },
);

const Book = models.Book || model("Book", BookSchema);
export default Book;
