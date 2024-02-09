"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const UserModel_1 = __importDefault(require("../models/UserModel"));
class UserController {
    constructor() {
        this.login = (req, res) => {
            let kor_ime = req.body.kor_ime;
            let lozinka = req.body.lozinka;
            UserModel_1.default.findOne({ kor_ime: kor_ime, lozinka: lozinka })
                .then((user) => {
                res.json(user);
            })
                .catch((err) => console.log(err));
        };
        this.update = (req, res) => {
            let kor_ime = req.body.kor_ime;
            UserModel_1.default.findOne({ kor_ime: kor_ime })
                .then((user) => {
                if (user) {
                    for (const field in req.body) {
                        if (req.body[field] != "") {
                            user[field] = req.body[field];
                        }
                    }
                    user.save();
                    res.json(user);
                }
            })
                .catch((err) => {
                res.json({ message: 'error' });
                console.log(err);
            });
        };
    }
}
exports.UserController = UserController;
