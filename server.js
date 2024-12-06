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
    origin: [
      "http://localhost:5173",
      "https://www.berkanozmen.com",
      "https://berkanozmen.vercel.app",
      "https://berkanozmen.com",
    ],
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
      console.log("Sunucu bu port üzerinde çalışıyor:", process.env.PORT);
    });
  })
  .catch((error) => {
    console.error("Veritabanı bağlantı hatası:", error);
    process.exit(1);
  });
