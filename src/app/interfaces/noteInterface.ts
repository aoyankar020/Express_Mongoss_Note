import { Date } from "mongoose";

export interface INote {
  title: String;
  author: String;
  content: String;
  isArchived: Boolean;
  isPinned: Boolean;
  priority: String;
  date: Date;
}
