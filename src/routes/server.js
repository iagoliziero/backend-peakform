import express from 'express';
import { createUser } from '../controller/controller.js';


const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;


let users = []

app.post('/users', createUser);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });