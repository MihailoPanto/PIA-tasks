import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Aukcija = new Schema({
  naziv: {
    type: String,
  },
  pocetak: {
    type: String,
  },
  kraj: {
    type: String,
  },
  umetnine: [{
    naziv:String,
    ponuda:String,
    vlasnik:String
  }]
  
});

export default mongoose.model("Aukcija", Aukcija, "auctions");
