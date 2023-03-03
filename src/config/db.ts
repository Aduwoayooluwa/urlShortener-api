import mongoose from 'mongoose';
const config = require('config');

const db = config.get('mongodbUrl')

const connectDb = async () => {

    try {
        await mongoose.connect(db, {
            // useNewUrlParser: true
        })
        console.log('Mongodb Connected....');
    } catch (error: any) {
        console.error("Cannot connect to MongoDB. Existing appliction startup")
        console.error(error.message)
        process.exit(-1)
    }
}

export default connectDb