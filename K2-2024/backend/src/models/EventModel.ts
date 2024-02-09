import mongoose from "mongoose";

const Schema = mongoose.Schema;

let EventModel = new Schema({
    naziv: String,
    mesto: String,
    organizator: String,
    datum: String,
    dolazi: [{
        korisnik:String,
        posluzenje:String
    }]
});

export default mongoose.model("EventModel", EventModel, "events");
