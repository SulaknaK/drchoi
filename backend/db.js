import mongoose from "mongoose";

const uname = "koeun2024";
const pw = "codes2024";

const mongoUrl = `mongodb+srv://${uname}:${pw}@cluster0.uwz82.mongodb.net/?retryWrites=true&w=majority`;

async function connectToDb(){
    mongoose.connect(mongoUrl)
        .then(() => {
          console.log('Connected to MongoDB');
        })
        .catch((err) => {
          console.error('Error connecting to MongoDB:', err);
        });
}


export{
    connectToDb,
};