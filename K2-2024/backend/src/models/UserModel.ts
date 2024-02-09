import mongoose from "mongoose";

const Schema = mongoose.Schema;

let UserModel = new Schema({
    ime: String,
    prezime: String,
    kor_ime: String,
    lozinka: String,
    mejl: String,
    prijatelji: [String]
});

export default mongoose.model("UserModel", UserModel, "users");
