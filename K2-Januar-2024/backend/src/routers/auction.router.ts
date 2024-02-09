import express from "express";
import { AuctionController } from "../controllers/auction.controller";
const auctionRouter = express.Router();

auctionRouter
  .route("/open")
  .get((req, res) => new AuctionController().open(req, res));

auctionRouter
  .route("/bid")
  .post((req, res) => new AuctionController().bid(req, res));

auctionRouter
  .route("/user/:vlasnik")
  .get((req, res) => new AuctionController().userBuy(req, res));

auctionRouter
  .route("/all")
  .get((req, res) => new AuctionController().all(req, res));

export default auctionRouter;
