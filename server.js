import express from 'express';
import { createBody, deleteBody, getBody, updateBody } from './src/controller/controllerBody.js';
import cors from 'cors'
import routerUser from './src/routes/users.routes.js';
import routerExercise from './src/routes/exercises.routes.js';

const app = express();
app.use(cors({
  origin: 'localhost:5173'
}))

app.use(express.json());
const PORT = process.env.PORT || 3000;



// method CRUD from users
app.use('/users', routerUser)

// method CRUD from exercises
app.use('/exercises', routerExercise)

//method CRUD from profileBody
app.post('/body', createBody)
app.get('/body', getBody)
app.put('/body/:id', updateBody)
app.delete('/body/:id', deleteBody)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });