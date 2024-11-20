const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {})
    .then(() => {
      console.log("MongoDB Bağlantısı Başarılı!");
    })
    .catch(() => {
      console.log("MongoDB Bağlantısı Başarısız!");
    });
};

module.exports = connectDB;
