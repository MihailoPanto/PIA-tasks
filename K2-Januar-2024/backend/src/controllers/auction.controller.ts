import * as express from "express";
import Aukcija from "../models/auction";


export class AuctionController {

  all = (req: express.Request, res: express.Response) => {

    Aukcija.find({})
      .then((auctions) => {
        res.json(auctions);
      })
      .catch((err) => console.log(err));
  };

  open = (req: express.Request, res: express.Response) => {

    let now = new Date();
    let openAuctions = []

    Aukcija.find({})
      .then((auctions) => {
        if(auctions){
            openAuctions = auctions.filter(
                auction=>{
                    let auctionStartDate = new Date(auction.pocetak as string)
                    let auctionEndtDate = new Date(auction.kraj as string)
                    return now >= auctionStartDate && now < auctionEndtDate;
                }
            )
            res.json(openAuctions);
        }

        // res.json(user);
      })
      .catch((err) => console.log(err));
  };

  bid = (req: express.Request, res: express.Response) => {

    let umetnina_naziv=req.body.naziv;
    let umetnina_ponuda=req.body.ponuda;
    let umetnina_vlasnik=req.body.vlasnik;

    let now = new Date();

    Aukcija.findOne({naziv:req.body.aukcija})
      .then((auction) => {
        if(auction){
          let auctionEndDate = new Date(auction.kraj as string);
          if(now>auctionEndDate){
            res.json({message:'isteklo'});
          }else{
            for(let i=0;i<auction.umetnine.length;i++){
              if(auction.umetnine[i].naziv==umetnina_naziv){
                auction.umetnine[i].ponuda=umetnina_ponuda;
                auction.umetnine[i].vlasnik=umetnina_vlasnik;
                auction.save()
                res.json({message:'ok'});
                break;
              }
            }
          }
        }
      })
      .catch((err) => console.log(err));
  };

  userBuy = (req: express.Request, res: express.Response) => {

    let now = new Date();
    let vlasnik = req.params.vlasnik;


    let kupljene = []

    Aukcija.find({"umetnine.vlasnik":vlasnik})
      .then((auctions) => {
        if(auctions){
          kupljene = auctions.filter(
                auction=>{
                    let auctionEndtDate = new Date(auction.kraj as string)
                    return now >= auctionEndtDate;
                }
            )
            res.json(kupljene);
        }
      })
      .catch((err) => console.log(err));
  };
}