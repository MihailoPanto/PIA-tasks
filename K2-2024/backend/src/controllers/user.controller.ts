import * as express from "express";
import UserModel from "../models/UserModel";

export class UserController {
  login = (req: express.Request, res: express.Response) => {
    let kor_ime = req.body.kor_ime;
    let lozinka = req.body.lozinka;

    UserModel.findOne({ kor_ime: kor_ime, lozinka: lozinka })
      .then((user) => {
        res.json(user);
      })
      .catch((err) => console.log(err));
  };

  update = (req: express.Request, res: express.Response) => {
    let kor_ime = req.body.kor_ime;

    UserModel.findOne({ kor_ime: kor_ime })
      .then((user) => {
        if(user){
          for(const field in req.body){
            if(req.body[field] != ""){
              (user as any)[field] = req.body[field];
            }
          }
          user.save()
          res.json(user);
        }
      })
      .catch((err) =>{
        res.json({message:'error'});
        console.log(err);
      } );
  };
}
