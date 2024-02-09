import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Korisnik = new Schema({
  ime: {
    type: String,
  },
  prezime: {
    type: String,
  },
  kor_ime: {
    type: String,
  },
  lozinka: {
    type: String,
  },
  mejl: {
    type: String,
  },
  tip: {
    type: String,
  },
  narudzbine: [{idN:Number}]
});

export default mongoose.model("Korisnik", Korisnik, "korisnici");
