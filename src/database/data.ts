import mongodb from "mongodb"
import dotenv from "dotenv"
//! Mongo Db DatabaSE WITH OPERATIONS
dotenv.config()
///Get all data from mongodb

// export const mongoDBConnection = async () => mongodb.connect(

//     process.env.MONGODB_URL as string,
//     {
//         useUnifiedTopology: true
//     },
//     async (error, client) => {
//         if (error) throw error;
//         console.log("DB Connected !");
//         const database = client.db()
//         const collection = database.collection("todos");
//         let dataFromMongo = await collection.find().toArray();
//         console.log(dataFromMongo);
//     }
// )



export const postDatatoMongoDB = async () => mongodb.connect(

    process.env.MONGODB_URL as string,
    {
        useUnifiedTopology: true
    },
    async (error, client) => {
        if (error) throw error;
        console.log("DB Connected !");
        const database = client.db()
        const collection = database.collection("todos");
        let senddatatoMongodb = await collection.insertOne({
            name: "hello",
            email: "hello@gmail.com"
        }, (err, data) => {
            if (err) throw err;
            console.log(data);
        });
        // console.log(senddatatoMongodb);
    }
)


export const postManyDatatoMongoDB = async () => mongodb.connect(

    process.env.MONGODB_URL as string,
    {
        useUnifiedTopology: true
    },
    async (error, client) => {
        if (error) throw error;
        console.log("DB Connected !");
        const database = client.db()
        const collection = database.collection("todos");
        let senddatatoMongodb = await collection.insertMany([
            {
                name: "hello",
                email: "hello@gmail.com"
            },
            {
                name: "gal",
                email: "fal@gmail.com"
            },
            {
                name: "del",
                email: "jjdfsu@gmail.com"
            }
        ], (err, data) => {
            if (err) throw err;
            console.log(data);
        });
        // console.log(senddatatoMongodb);
    }
)




export const findDataInMongoDB = async () => mongodb.connect(

    process.env.MONGODB_URL as string,
    {
        useUnifiedTopology: true
    },
    async (error, client) => {
        if (error) throw error;
        console.log("DB Connected !");
        const database = client.db()
        const collection = database.collection("todos");

        const filter = {

            name: "user1"
        }
        let finddataMongodb = await collection.findOne(filter,

            (err, data) => {
                if (err) throw err;
                console.log(data);
            }

        );
        console.log(finddataMongodb);
    }
)





export const deleteDataInMongoDB = async () => mongodb.connect(

    process.env.MONGODB_URL as string,
    {
        useUnifiedTopology: true
    },
    async (error, client) => {
        if (error) throw error;
        console.log("DB Connected !");
        const database = client.db()
        const collection = database.collection("todos");

        const filter = {

            name: "user1"
        }
        let finddataMongodb = await collection.deleteOne(filter,

            (err, data) => {
                if (err) throw err;
                console.log(data);
            }

        );
        console.log(finddataMongodb);
    }
)


// Throws error that required atomic operators

export const updateDataInMongoDB = async () => mongodb.connect(

    process.env.MONGODB_URL as string,
    {
        useUnifiedTopology: true
    },
    async (error, client) => {
        if (error) throw error;
        console.log("DB Connected !");
        const database = client.db()
        const collection = database.collection("todos");

        const filter = {

            name: "user1"
        };
        const update = {

            name: "user1"
        };

        let finddataMongodb = await collection.updateOne(
            filter,
            update,

            (err, data) => {
                if (err) throw err;
                console.log(data);
            }
        );
        console.log(finddataMongodb);
    }
)