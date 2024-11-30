const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const AuthRouter = require("./routes/auth");
const ProjectRouter = require("./routes/projects");

dotenv.config();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: ["https://berkanozmen.com", "http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.get("/", (req, res) => res.send("Welcome to the server"));

app.use("/auth", AuthRouter);
app.use("/project", ProjectRouter);

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server is running on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.error("Veritabanı bağlantı hatası:", error);
    process.exit(1);
  });
