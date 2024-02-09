import express from "express";
import { EventController } from "../controllers/event.controller";
const eventRouter = express.Router();

eventRouter.route("/future").get((req:any, res:any) => new EventController().getFuture(req, res));

eventRouter.route("/all/:username").get(
    (req:any, res:any) => new EventController().getEvents(req, res)
);

eventRouter.route("/delete").post(
    (req:any, res:any) => new EventController().deleteEvent(req, res)
);

eventRouter.route("/add").post(
    (req:any, res:any) => new EventController().addEvent(req, res)
);

export default eventRouter;
