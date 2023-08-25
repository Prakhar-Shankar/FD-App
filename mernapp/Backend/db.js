const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://moodiefoodie:moodiefoodie123@cluster0.myx0z2p.mongodb.net/moodiefoodie-mern?retryWrites=true&w=majority'

const mongoDB = async () => {
    try {
      mongoose.set("strictQuery", false);
      mongoose.connect(mongoURI);
      console.log("Connected to Mongo Successfully!");
      const fetched_data = await mongoose.connection.db.collection("food_item");
      fetched_data.find({}).toArray(function(err, data){
        if(err) console.log(err);
        else console.log(data); 
      })
    } catch (error) {
      console.log(error);
    }
  };

module.exports = mongoDB;
