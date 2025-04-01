import { PrismaClient } from '@prisma/client';
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

const prisma = new PrismaClient();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });