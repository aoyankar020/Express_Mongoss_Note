import { Request, Response } from "express";
import { app } from "../../app";
import { User } from "../model/userModel";
import express from "express";
export const userRouter = express.Router();

// POST route to insert user data
userRouter.post("/create", async (req: Request, res: Response) => {
  try {
    // process 1
    // const { name, email, age } = req.body;
    // const newUser = new User({ name, email, age });
    // const savedUser = await newUser.save();
    // process 2
    const body = req.body;
    const users = await User.create(body);
    console.log(users);

    res.status(201).json({ message: "User created", data: users });
  } catch (error) {
    res.status(500).json({ error });
  }
});
// get Users
userRouter.get("/", async (req: Request, res: Response) => {
  try {
    const allusers = await User.find();
    res.status(201).json({ message: "All Users", data: allusers });
  } catch (error) {
    res.status(500).json({ error });
  }
});

// Get Single User
userRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    res.status(200).send({ message: "Single User", data: user });
  } catch (error) {
    res.status(500).json({ error });
  }
});

userRouter.patch("/update/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    console.log(id);
    const updatedData = req.body;
    console.log(updatedData);
    const result = await User.findByIdAndUpdate(id, updatedData, { new: true });
    res.status(200).send({ mesage: "Update Complete", data: result });
  } catch (error) {
    res.status(500).send(error);
  }
});
