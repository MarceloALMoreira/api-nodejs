import bcrypt from "bcryptjs";
import { userValidation } from "../validations/user.validadation";

import {
  createUser,
  deleteUser,
  getAll,
  getById,
  getId,
  updateUser,
} from "../repositorys/user.repository";

export const create = async (req, res) => {
  try {
    //create schema to validation
    await userValidation.validate(req.body);

    // create hash password
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashPassword;
    const user = await createUser(req.body);
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const get = async (req, res) => {
  try {
    const users = await getAll();
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send(erro);
  }
};

export const getId = async (req, res) => {
  try {
    const user = await getById(req.params.id);
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const update = async (req, res) => {
  try {
    const user = await updateUser(req.params.id, req.body);
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const remove = async (req, res) => {
  try {
    const user = await deleteUser(req.params.id);
    res.status(200).send();
  } catch (error) {
    res.status(400).send(error);
  }
};
