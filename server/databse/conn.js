import mongoose from "mongoose";
import 'dotenv/config'
import { MongoMemoryServer } from "mongodb-memory-server";

const connect = async () => {
   mongoose.connect(process.env.MONGO_URI,  {

    useNewUrlParser: "true",
    useUnifiedTopology: "true"
  
  })
   .then(console.log("MongoDB connected..."))
   .catch((err) => console.log(err))
}

export default connect;