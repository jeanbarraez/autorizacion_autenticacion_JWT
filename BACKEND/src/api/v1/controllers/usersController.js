import { createUser } from "../models/usersModels.js";

export const createNewUser = async (req, res) => {
  try {
    const { email, password, rol, lenguage } = req.body;
    //console.log("req.boy", req.body);
    const newUser = await createUser(email, password, rol, lenguage);
    console.log({ newUser: newUser });
    res.status(201).json({ user: newUser });
  } catch (error) {
    res.status(400).json(error.message);
    console.log(error.message);
  }
};
