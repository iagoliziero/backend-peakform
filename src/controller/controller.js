import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createUser(req, res) { 
    const { name, email, date, password } = req.body;
    try {
        const user = await prisma.profileData.create({
            data: {
                name,
                email,
                date,
                password
            },
        })
        res.status(201).json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error creating user');
    }
}