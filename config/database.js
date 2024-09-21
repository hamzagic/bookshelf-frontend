import mongoose from 'mongoose';

// it will only connect on server files
// client files will return a webpack error
let connected = false;
const connectDB = async () => {
    mongoose.set('strictQuery', true); // will only save what is set in the model
    if(connected) {
        console.log('DB is connected');
        return;
    }

    try {
        await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        connected = true;
        console.log('connected...');
    } catch (error) {
        console.log(error.message);
    }
};

export default connectDB;

