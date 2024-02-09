import * as express from "express";
import Korisnik from "../models/user";
import Proizvod from "../models/item";
import Narudzbina from "../models/order";

export class UserController {
  login = (req: express.Request, res: express.Response) => {
    let kor_ime = req.body.kor_ime;
    let lozinka = req.body.lozinka;

    Korisnik.findOne({ kor_ime: kor_ime, lozinka: lozinka })
      .then((user) => {
        res.json(user);
      })
      .catch((err) => console.log(err));
  };

  getUser = (req: express.Request, res: express.Response) => {
    let kor_ime = req.body.kor_ime;

    Korisnik.findOne({ kor_ime: kor_ime })
      .then((user) => {
        res.json(user);
      })
      .catch((err) => console.log(err));
  };

  getItems = (req: express.Request, res: express.Response) => {
    Proizvod.find({})
      .then((items) => {
        res.json(items);
      })
      .catch((err) => console.log(err));
  };

  addOrder = (req: express.Request, res: express.Response) => {

    let narudzbina = new Narudzbina(req.body);
    let x = 1;

    Narudzbina.find({}).sort({ idN: -1 }).limit(1)
      .then((max:any) => {
        if (max.length > 0) {
          x = max[0].idN + 1;
        }

        narudzbina.idN = x;

        narudzbina.save().then((p) => {
            res.status(200).json({ message: "proizvod added" });
          })
          .catch((err) => {
            console.log(err);
            res.status(400).json({ message: "error" });
          });
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({ message: "error" });
      });
  };

  update = (req: express.Request, res: express.Response) => {
    Proizvod.findOneAndUpdate({naziv:req.body.naziv},{ $set : {stanje:req.body.stanje}})
      .then((success) => {
        res.json({ msg: "Success" });
      })
      .catch((err) => console.log(err));
  };

  getOrders = (req: express.Request, res: express.Response) => {
    Narudzbina.find({})
      .then((items) => {
        res.json(items);
      })
      .catch((err) => console.log(err));
  };
}
