import express from "express";
import { userController } from "./user.controller";

const router = express.Router();

router.post("/", userController.createUser);

router.get("/", userController.getAllUsers);

router.patch("/:id", userController.updateUser);

router.get("/:id", userController.getSingleUser);

export const userRoutes = router;
