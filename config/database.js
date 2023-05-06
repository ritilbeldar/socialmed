const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

exports.connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then((con) => console.log(`Databse is connected: ${con.connection.host}`))
    .catch((err) => console.log(err));
};
