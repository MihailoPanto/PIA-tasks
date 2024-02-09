"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventController = void 0;
const EventModel_1 = __importDefault(require("../models/EventModel"));
class EventController {
    constructor() {
        this.getFuture = (req, res) => {
            let today = new Date();
            today.setHours(0, 0, 0, 0);
            let futureClasses = [];
            EventModel_1.default.find({})
                .then((events) => {
                futureClasses = events.filter(event => {
                    let tmpDate = new Date(event.datum);
                    return tmpDate > today;
                });
                res.json(futureClasses);
            })
                .catch((err) => console.log(err));
        };
        this.getEvents = (req, res) => {
            let username = req.params.username;
            EventModel_1.default.find({ organizator: username }).then((events) => {
                res.json(events);
            })
                .catch((err) => console.log(err));
        };
        this.deleteEvent = (req, res) => {
            EventModel_1.default.deleteOne({ naziv: req.body.name, datum: req.body.date }).then(events => {
                res.json({ message: "ok" });
            }).catch((err) => {
                console.log(err);
                res.json({ message: "error" });
            });
        };
        this.addEvent = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let error = false;
            yield EventModel_1.default.findOne({ naziv: req.body.naziv }).then((e) => {
                if (e) {
                    error = true;
                    res.json({ message: 'error-name' });
                }
            }).catch((err) => {
                error = true;
                console.log(err);
            });
            if (error) {
                return;
            }
            yield EventModel_1.default.findOne({ mesto: req.body.mesto, datum: req.body.datum }).then((e) => {
                if (e) {
                    error = true;
                    res.json({ message: 'error-place-date' });
                }
            }).catch((err) => {
                error = true;
                console.log(err);
            });
            if (error) {
                return;
            }
            let e = {
                naziv: req.body.naziv,
                mesto: req.body.mesto,
                organizator: req.body.organizator,
                datum: req.body.datum,
                dolazi: []
            };
            new EventModel_1.default(e).save().then(ok => {
                res.json({ message: "ok" });
            }).catch(err => {
                console.log(err);
            });
        });
    }
}
exports.EventController = EventController;
