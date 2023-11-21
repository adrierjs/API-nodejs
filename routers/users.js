import { Router } from "express";
import * as userController from "../controllers/userController.js";

const routes = Router();

routes.route('/users')
    .get(userController.getAllUsers)
    .post(userController.createUser);

export default routes;