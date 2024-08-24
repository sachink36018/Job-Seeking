import mongoose from "mongoose";

export const dbConnection = ()=> {
    mongoose.connect(process.env.MONGO_URI,{
        dbName: "JOB_SEEKING"
    }).then(()=>{
        console.log("Connect to database")
    })
    .catch((err)=>{
        console.log(`Some error occured while connecting to databasr: ${err}`);
    });
}