import express from 'express'
import { createExercise, deleteExercise, getExercise, updateExercise } from '../controller/controllerExercise.js';

const routerExercise = express.Router();

routerExercise.post('/', createExercise)
routerExercise.get('/', getExercise)
routerExercise.put('/:id', updateExercise)
routerExercise.delete('/:id', deleteExercise)

export default routerExercise;