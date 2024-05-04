let express = require("express");
// let mongoose = require("mongoose");
let cors = require("cors");
let bodyParser = require("body-parser");
// let dbConfig = require("./database/db");

// const createError = require('http-errors');
// // Express Route
// const studentRoute = require("./routes/user.route");
// let newsAdmin = require("./models/user");
// // Connecting mongoDB Database
// mongoose.Promise = global.Promise;
// mongoose
//   .connect(dbConfig.db, {
//     useNewUrlParser: true,
//   })
//   .then(
//     () => {
//       console.log("Database sucessfully connected!");
//     },
//     (error) => {
//       console.log("Could not connect to database : " + error);
//     }
//   );

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
// app.use("/users", studentRoute);

// app.get("/", async (req, res, next) => {
//   try {
//     const students = await newsAdmin.find(); // Retrieve all documents from the Student collection
//     console.log("hello");
//     console.log(students)
//     res.json(students); // Send the retrieved data as JSON response
//   } catch (error) {
// res.send(error)
   
//   }
// });
app.get('/',(req,res)=>{
  res.send("succesfully created")
})

// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log("Connected to port " + port);
});

// 404 Error
app.use((req, res, next) => {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
