import express from 'express'
import { createBody, deleteBody, getBody, updateBody } from '../controller/controllerBody.js';
import verifyToken from '../middleware/verifyToken.js';
const routerBody = express.Router();

routerBody.post('/', verifyToken, createBody)
routerBody.get('/', getBody)
routerBody.put('/:id', updateBody)
routerBody.delete('/:id', deleteBody)

export default routerBody;