import * as express from "express";
import EventModel from "../models/EventModel";

export class EventController {
    getFuture = (req: express.Request, res: express.Response) => {

        let today = new Date();
        today.setHours(0,0,0,0);

        let futureClasses = []
        EventModel.find({})
          .then((events) => {
            futureClasses = events.filter(
                event=>{
                    let tmpDate = new Date(event.datum as string);
                    return tmpDate > today;
                }
            )
            res.json(futureClasses);
          })
          .catch((err) => console.log(err));
    };

    getEvents = (req: express.Request, res: express.Response) => {
        let username=req.params.username;
        EventModel.find({organizator:username}).then((events) => {
            res.json(events);
          })
          .catch((err) => console.log(err));
    };

    deleteEvent = (req: express.Request, res: express.Response)=>{
        EventModel.deleteOne({naziv: req.body.name, datum: req.body.date}).then(events=>{
            res.json({message: "ok"})
        }).catch((err)=>{
            console.log(err)
            res.json({message: "error"})
        })
    }

    addEvent = async (req: express.Request, res: express.Response)=>{

        let error = false;

        await EventModel.findOne({naziv:req.body.naziv}).then((e)=>{
            if(e){
                error=true;
                res.json({message:'error-name'});
            }
        }).catch((err)=>{
            error=true;
            console.log(err)
        })

        if(error){
            return;
        }

        await EventModel.findOne({mesto:req.body.mesto, datum:req.body.datum}).then((e)=>{
            if(e){
                error=true;
                res.json({message:'error-place-date'});
            }
        }).catch((err)=>{
            error=true;
            console.log(err)
        })

        if(error){
            return;
        }

        let e = {
            naziv:req.body.naziv,
            mesto:req.body.mesto,
            organizator:req.body.organizator,
            datum:req.body.datum,
            dolazi:[]
        }

        new EventModel(e).save().then(ok=>{
            res.json({message: "ok"})
        }).catch(err=>{
            console.log(err)
        })
    }
}
