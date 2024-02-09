"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let EventModel = new Schema({
    naziv: String,
    mesto: String,
    organizator: String,
    datum: String,
    dolazi: [{
            korisnik: String,
            posluzenje: String
        }]
});
exports.default = mongoose_1.default.model("EventModel", EventModel, "events");
