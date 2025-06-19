import express, { Application, Request, response, Response } from "express";
import { User } from "./app/model/userModel";
import { userRouter } from "./app/controller/user.controller";
import { noteRouter } from "./app/controller/notes.controller";

export const app: Application = express();
export const port = process.env.PORT || 5000;
// Middleware to parse JSON
app.use(express.json());

app.use("/users", userRouter);
app.use("/notes", noteRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("User Home Page");
});
