import * as express from "express";
import Korisnik from "../models/user";

export class UserController {
  login = (req: express.Request, res: express.Response) => {
    let korisnicko_ime = req.body.korisnicko_ime;
    let lozinka = req.body.lozinka;

    Korisnik.findOne({ korisnicko_ime: korisnicko_ime, lozinka: lozinka })
      .then((user) => {
        res.json(user);
      })
      .catch((err) => console.log(err));
  };

  // getUser = (req: express.Request, res: express.Response) => {
  //   let kor_ime = req.body.kor_ime;

  //   Korisnik.findOne({ kor_ime: kor_ime })
  //     .then((user) => {
  //       res.json(user);
  //     })
  //     .catch((err) => console.log(err));
  // };
}
