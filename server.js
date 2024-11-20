const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const AuthRouter = require("./routes/auth");
const ProjectRouter = require("./routes/projects");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.send("Welcome to the server"));

connectDB();

app.use(cors());

app.use("/auth", AuthRouter);
app.use("/project", ProjectRouter);

app.listen(process.env.PORT, () => {
  console.log("Server is running on port " + process.env.PORT);
});
