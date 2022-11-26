const dotenv = require("dotenv");
dotenv.config({ path: "local.env" });
const express = require("express");
const connectDB = require("./connect");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const hobbyRoutes = require("./routes/hobbyRoutes");
const app = express();
const morgan = require("morgan");
const multer = require("multer");

connectDB();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/api/user", userRoutes);
app.use("/api/hobby", hobbyRoutes);

app.listen(
  3000,
  console.log(`Server is running on port ${3000}
`)
);
