import express from "express";
import { registerController } from "../controllers";

const router = express.Router();

router.get("/register", registerController.register);

export default router;
 