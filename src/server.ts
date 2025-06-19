// getting-started.js
import mongoose from "mongoose";
// const mongoose = require("mongoose");

import { Server } from "http";
import { app, port } from "./app";

let server: Server;
const uri =
  "mongodb+srv://aoyankar36:admin@cluster0.wc1urj7.mongodb.net/usersDb?retryWrites=true&w=majority&appName=Cluster0";
async function main() {
  try {
    // await mongoose.connect(uri);
    await mongoose
      .connect(uri)
      .then(() => console.log("MongoDB connected"))
      .catch((err) => console.error("MongoDB connection error:", err));

    server = app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main().catch((err) => console.log(err));
