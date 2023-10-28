import mongoose  from "mongoose";


export const connectDB = ()=>{
 mongoose.connect(process.env.MONGO_URL,{
    dbName:"backendAPI",
}).then(()=>console.log("DB Connected")).catch((e)=>console.log(e))
};
