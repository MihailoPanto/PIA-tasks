import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Proizvod = new Schema({
  naziv: {
    type: String,
  },
  kategorija: {
    type: String,
  },
  cena: {
    type: String,
  },
  stanje: {
    type: Number,
  }
});

export default mongoose.model("Proizvod", Proizvod, "proizvodi");
