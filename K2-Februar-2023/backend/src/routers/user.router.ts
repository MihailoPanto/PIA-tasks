import express from "express";
import { UserController } from "../controllers/user.controller";
const userRouter = express.Router();

userRouter
  .route("/login")
  .post((req, res) => new UserController().login(req, res));

userRouter
  .route("/getUser")
  .post((req, res) => new UserController().getUser(req, res));

userRouter
  .route("/allItems")
  .get((req, res) => new UserController().getItems(req, res));

userRouter
  .route("/addOrder")
  .post((req, res) => new UserController().addOrder(req, res));

userRouter
  .route("/update")
  .post((req, res) => new UserController().update(req, res));

userRouter
  .route("/allOrders")
  .get((req, res) => new UserController().getOrders(req, res));

export default userRouter;
