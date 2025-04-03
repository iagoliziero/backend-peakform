import express from 'express';
import { createUser, getUser } from '../controller/controller.js';

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.post('/users', createUser);
app.get('/users', getUser)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });