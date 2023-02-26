const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    try{
        await mongoose.set("strictQuery", false);
        await mongoose.connect(db);
        console.log('Connected to database');
    }catch(err){
        console.error(err.message);
        // exiting the process with failure
        process.exit(1);
    }
};

module.exports = connectDB;
