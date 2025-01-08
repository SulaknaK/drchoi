import {connectToDb} from './db.js';
import express from 'express';
import cors from 'cors';
import express from 'express';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


const PORT = 3001;

const dataSchema = new mongoose.Schema({
  experiment: String,
  version: String,
  identifier: String,
  data: mongoose.Schema.Types.Mixed, // Allows varied data types
});

const DataModel = mongoose.model('Data', dataSchema);

connectToDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server listening on port " + PORT);
    });
  })
  .catch((error) => {
    console.error("Error connecting to DB:", error);
  });


  app.post('/save-data', async (req, res) => {
    const { experiment, version, identifier, data } = req.body;
  
    try {
      const newData = new DataModel({ experiment, version, identifier, data });
      await newData.save(); 
      res.status(201).send({ message: 'Data saved successfully!' });
    } catch (error) {
      console.error("Error saving data:", error);
      res.status(500).send({ error: 'Failed to save data' });
    }
  });
  
