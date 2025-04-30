import express from 'express'
import { createExercise, deleteExercise, getExercise, updateExercise } from '../controller/controllerExercise.js';
import verifyToken from '../middleware/verifyToken.js';


const routerExercise = express.Router();

routerExercise.post('/', verifyToken, createExercise)
routerExercise.get('/', verifyToken, getExercise)
routerExercise.put('/:id', verifyToken, updateExercise)
routerExercise.delete('/:id', verifyToken, deleteExercise)

export default routerExercise;