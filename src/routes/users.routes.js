import express from 'express'
import { createUser, deleteUser, getUser, updateUser } from '../controller/controllerUser.js';

const routerUser = express.Router();

routerUser.post('/', createUser)
routerUser.get('/', getUser)
routerUser.put('/:id', updateUser)
routerUser.delete('/:id', deleteUser)

export default routerUser;