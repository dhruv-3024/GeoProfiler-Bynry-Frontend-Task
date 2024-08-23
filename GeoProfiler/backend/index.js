
const express = require('express');
require("dotenv").config();
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
const port = process.env.PORT || 3300;

const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@geoprofiler.ujwvx.mongodb.net/?retryWrites=true&w=majority&appName=GeoProfiler`;


app.use(cors());//aloows cross-origin requests
app.use(express.json())

mongoose.connect(
    uri,
).then(
    console.log("MongoDB Connected Successfully!")
).catch(
    (err) => console.log("Error Connecting to MongoDB", err)
);

// profiles
const profileRoutes = require("../backend/routes/profileRoutes")
app.use("/profiles",profileRoutes);

app.get("/",  (req, res) => {
    res.send("GeoProfiler Server!");
  });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})