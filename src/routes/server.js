import express from 'express';
import { createUser, deleteUser, getUser, updateUser } from '../controller/controller.js';

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.post('/users', createUser);
app.get('/users', getUser)
app.put('/users/:id', updateUser)
app.delete('/users/:id', deleteUser)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });