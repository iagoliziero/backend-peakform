import express from 'express'
import { createUser, deleteUser, getUser, updateUser } from '../controller/controllerUser.js';
import verifyToken from '../middleware/verifyToken.js';
const routerUser = express.Router();

routerUser.post('/', createUser)
routerUser.get('/', verifyToken, getUser)
routerUser.put('/', verifyToken, updateUser)
routerUser.delete('/', verifyToken, deleteUser)

export default routerUser;