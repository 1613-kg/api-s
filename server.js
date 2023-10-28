import {app} from "./app.js";
import {connectDB} from "./database/data.js"

connectDB();

app.listen(4000,()=>{
    console.log("Server is working");
 })