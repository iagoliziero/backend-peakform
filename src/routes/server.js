import express from 'express';
import { createUser, deleteUser, getUser, updateUser } from '../controller/controllerUser.js';
import  { createExercise, deleteExercise, getExercise, updateExercise } from '../controller/controllerExercise.js';
import { createBody, getBody, updateBody } from '../controller/controllerBody.js';

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

// method CRUD from users
app.post('/users', createUser);
app.get('/users', getUser)
app.put('/users/:id', updateUser)
app.delete('/users/:id', deleteUser)

// method CRUD from exercises
app.post('/exercises', createExercise);
app.get('/exercises', getExercise)
app.put('/exercises/:id', updateExercise)
app.delete('/exercises/:id', deleteExercise)

//method CRUD from profileBody
app.post('/body', createBody)
app.get('/body', getBody)
app.put('/body/:id', updateBody)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });