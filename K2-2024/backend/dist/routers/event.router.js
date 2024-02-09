"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const event_controller_1 = require("../controllers/event.controller");
const eventRouter = express_1.default.Router();
eventRouter.route("/future").get((req, res) => new event_controller_1.EventController().getFuture(req, res));
eventRouter.route("/all/:username").get((req, res) => new event_controller_1.EventController().getEvents(req, res));
eventRouter.route("/delete").post((req, res) => new event_controller_1.EventController().deleteEvent(req, res));
eventRouter.route("/add").post((req, res) => new event_controller_1.EventController().addEvent(req, res));
exports.default = eventRouter;
