import { Request, response, Response } from "express";

import { note } from "../model/noteModel";
import express from "express";

export const noteRouter = express.Router();
noteRouter.get("/", async (req: Request, res: Response) => {
  try {
    const result = await note.find();
    res.status(200).send({ message: "All Notes", data: result });
  } catch (error) {
    res.status(500).send(error);
  }
});

noteRouter.post("/create", async (req: Request, res: Response) => {
  try {
    const noteData = req.body;
    const result = await note.create(noteData);
    res.status(200).send({ message: "All Notes", data: result });
  } catch (error) {
    res.status(500).send(error);
  }
});
noteRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await note.findById(id);
    res.status(200).send({ message: "Get Single Data", data: result });
  } catch (error) {
    res.status(500).send(error);
  }
});

noteRouter.patch("/update/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const updatedData = req.body;

    const result = await note.findByIdAndUpdate(id, updatedData, { new: true });
    res.status(200).send({ mesage: "Update Complete", data: result });
  } catch (error) {
    res.status(500).send(error);
  }
});
noteRouter.delete("/delete/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const result = await note.findByIdAndDelete(id);
    res
      .status(200)
      .send({ message: "Deleted Data Successfully", data: result });
  } catch (error) {
    res.status(500).send(error);
  }
});
