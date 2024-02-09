import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Korisnik = new Schema({
  ime: {
    type: String,
  },
  prezime: {
    type: String,
  },
  korisnicko_ime: {
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
});

export default mongoose.model("Korisnik", Korisnik, "users");
