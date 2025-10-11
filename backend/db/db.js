import mongoose from "mongoose";
const connetToDatabase = async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("databasae connection created` ")
    }
    catch(error){
        console.log(error)
    }
}

export default connetToDatabase