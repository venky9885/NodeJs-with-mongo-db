import express, { Request, Response } from "express"
import { Todo } from "../models/user_model";

const router = express.Router();

//! Mongoose Crud with routing system
//Post Request

router.post("/add", async (req: Request, res: Response) => {
    /// const data = req.body.name;

    const { title, description } = req.body;
    const dataItem = Todo.create({ title, description });
    // await dataItem.save();

    return res.status(200).json({
        data: dataItem,
    });


});



//Get Request

router.get("/", async (req: Request, res: Response) => {

    // res.send("Api is runn58ing");
    try {
        const dataItem = await Todo.find({});
        res.status(200).json({
            data: dataItem
            //message: "Api is Running data"
        });
    } catch (error) {
        console.log(error);
    }


});

//Delete Request

router.delete("/delete", async (req: Request, res: Response) => {

    // res.send("Api is runn58ing");

    const filter = {
        title: req.body.title
        //name: ""
    }
    const dataItem = await Todo.deleteOne(filter).then((data) => res.json({
        data: data,
        //message: "Api is Running data"
    })).catch((error) => {
        return res.send(error);
    });




});

//Update Request

router.put("/update", async (req: Request, res: Response) => {

    // res.send("Api is runn58ing");
    const filter = {
        title: req.body.title
        //name: ""
    }
    const updatedData = {
        title: req.body.description
        //name: ""
    }
    const dataItem = await Todo.updateOne(filter, updatedData, { new: true, }).then((data) => res.json({
        data: data,
        //message: "Api is Running data"
    })).catch((error) => {
        return res.send(error);
    });




});


/*

//! Non Mongo Routes 
// Get Method
router.get("/", (req: Request, res: Response) => {

    // res.send("Api is runn58ing");

    res.json({
        message: " Home Full Improved Server"
        //message: "Api is Running data"
    });

});
// Post Method Home
router.post("/", (req: Request, res: Response) => {
    /// const data = req.body.name;

    const { name, email } = req.body;
    console.log(name);
    // res.send("Api is runn58ing");

    res.json({
        message: {
            name, email
        },
        //message: "Api is Running data"
    });

});
router.get("/Home", (req: Request, res: Response) => {

    // res.send("Api is runn58ing");

    res.json({
        message: " Home Page  Two"
        //message: "Api is Running data"
    });

});

router.get("/Third", (req: Request, res: Response) => {

    // res.send("Api is runn58ing");

    res.json({
        message: " Third Page"
        //message: "Api is Running data"
    });

});
*/
export { router };