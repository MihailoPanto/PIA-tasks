import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userRouter from "./routers/user.router";
import eventRouter from "./routers/event.router";
// import productRouter from "./routers/product.router";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/K2-2024");
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("db connection ok");
});

const router = express.Router();
router.use("/users", userRouter);
router.use("/events", eventRouter);

app.use("/", router);

app.listen(4000, () => console.log(`Express server running on port 4000`));
