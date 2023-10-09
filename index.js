import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import db from "./config/Database.js";
import router from "./routes/userRouter.js";
import Users from "./models/UserModel.js";
import contact from "./routes/contactRouter.js";

dotenv.config();
const app = express();

try {
  await db.authenticate();
  console.log("Database Connected...");
  await Users.sync();
} catch (error) {
  console.error(error);
}

app.use(cookieParser());
app.use(express.json());
app.use(router);
app.use(contact);

const PORT = 3000;
app.listen(PORT, () => console.log(`server sudah menyala di port ${PORT}`));
