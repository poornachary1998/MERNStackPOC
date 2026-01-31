const mongoose = require('mongoose');

const mongooseConnectDB = async () =>{
    try{
        const connectDB = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Mongoose Connected: ${connectDB.connection.host}`.green.underline)
    }
    catch(error){
        console.log(`error : ${error}`.red.underline)
    }
}
module.exports = {mongooseConnectDB};