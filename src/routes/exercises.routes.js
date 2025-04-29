import express from 'express'
import { createExercise, deleteExercise, getExercise, updateExercise } from '../controller/controllerExercise.js';
import verifyToken from '../middleware/verifyToken.js';

const routerExercise = express.Router();

routerExercise.post('/', verifyToken, createExercise)
routerExercise.get('/', getExercise)
routerExercise.put('/:id', updateExercise)
routerExercise.delete('/:id', deleteExercise)

export default routerExercise;