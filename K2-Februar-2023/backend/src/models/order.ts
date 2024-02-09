import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Narudzbina = new Schema({
  idN: {
    type: Number,
  },
  kupac: {
    type: String,
  },
  proizvodi: [{naziv: String, kolicina: String}],
  racun: {
    type: Number,
  }
});

export default mongoose.model("Narudzbina", Narudzbina, "narudzbine");
