const mongoose = require('mongoose')

const connectDB = (uri) => {
  return mongoose.connect(uri,{})
  .then(()=>{
    console.log('Connected to MongoDB using Mongoose');
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
  })
}

module.exports = connectDB
