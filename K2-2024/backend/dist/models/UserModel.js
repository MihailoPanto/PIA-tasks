"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let UserModel = new Schema({
    ime: String,
    prezime: String,
    kor_ime: String,
    lozinka: String,
    mejl: String,
    prijatelji: [String]
});
exports.default = mongoose_1.default.model("UserModel", UserModel, "users");
