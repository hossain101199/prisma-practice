import { Request, Response } from "express";
import { userService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  const data = req.body;

  try {
    const result = await userService.createUserInDB(data);

    res.send({
      success: true,
      message: "User created successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await userService.getAllUsersFromDb();

    res.send({
      success: true,
      message: "Users retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const updateUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = req.body;

  try {
    const result = await userService.updateUserInDb(Number(id), data);

    res.send({
      success: true,
      message: "User updated successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const result = await userService.getSingleUserFromDb(Number(id));

    res.send({
      success: true,
      message: "User retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const userController = {
  createUser,
  getAllUsers,
  updateUser,
  getSingleUser,
};
