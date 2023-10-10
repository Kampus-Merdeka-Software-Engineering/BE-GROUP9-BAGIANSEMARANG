import express from "express";
import { getUsers, Register, login, Logout } from "../controllers/user.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();

router.get("/users", verifyToken, getUsers);
router.post("/users", Register);
router.post("/login", login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);

export default router;
