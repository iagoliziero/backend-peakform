import express from 'express';
import cors from 'cors'
import routerUser from './src/routes/users.routes.js';
import routerExercise from './src/routes/exercises.routes.js';
import routerBody from './src/routes/body.routes.js';


const app = express();
app.use(cors({
  origin: 'http://localhost:5173'
}))

app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('This is okay')
})
// method CRUD from users
app.use('/users', routerUser)

// method CRUD from exercises
app.use('/exercises', routerExercise)

//method CRUD from profileBody
app.use('/body', routerBody)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });