import config from './config'
import mongoose from 'mongoose'


(async () => {
    try{

        const mongooseOptions = {
            user: config.MONGO_USER,
            pass: config.MONGO_PASSWORD
        }
        const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`);
        console.log(`DB is connected to: ${db.connection.name}` )
    }catch(err){
        console.log(err)
    }
})()
