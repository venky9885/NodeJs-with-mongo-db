import express, { Request, Response } from "express";
import { Mongoose } from "mongoose";
import mongoose from "mongoose";
//import { postDatatoMongoDB } from "./database/data";
//import { mongoDBConnection } from "./database/data";

import { router } from "./routes/routes";
const app = express()

mongoose.connect(

    process.env.MONGODB_URL as string,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    },
    () => {
        console.log("Db connected !");
    }
)
app.use(express.urlencoded({ extended: false }));
//mongoDBConnection();
//postDatatoMongoDB();
app.use("/", router);
app.use(express.json());
/*
//Basic Express Server
app.get("/", (req: Request, res: Response) => {

    // res.send("Api is runn58ing");
    const data = req.url;
    res.status(200).json({
        message: data
        //message: "Api is Running data"
    });

});

//route 2 abt
app.get("/abt", (req: Request, res: Response) => {

    // res.send("Api is runn58ing");
    const data = req.url;
    res.status(200).json({
        message: data
        //message: "Api is Running data"
    });

});
*/
// server port 8080
app.listen(8080, () => {
    console.log("Server is Rocking ");
});


//Routes in Express Js