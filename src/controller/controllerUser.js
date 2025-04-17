import prisma from "../config/dbConfig.js";


export async function createUser(req, res) { 
    const { name, email, date, password } = req.body;
    try {
        const createUser = await prisma.profileData.create({
            data: {
                name,
                email,
                date,
                password
            },
        })
        res.status(201).json(createUser);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error creating user');
    }
}

export async function getUser(req, res) {

    try {
        const getUser = await prisma.profileData.findMany();
        res.status(200).send(getUser)
    } catch (error) {
        console.log(error.message)
        res.status(500).send('Error get user')
    }
}

export async function updateUser(req, res) {
    const id = parseInt(req.params.id)
    const { name, email, date, password } = req.body;
    try {
        const updateUser = await prisma.profileData.update({
            where: {
                id
            }, 
            data: {
                name,
                email,
                date,
                password,
            }
            
        })
        res.status(201).send(updateUser)
    } catch (error) {
        console.log(error.message)
        res.status(500).send('Error put user')
    }
}

export async function deleteUser(req, res) {
    const id = parseInt(req.params.id)
    try {
        const deleteUser = await prisma.profileData.delete({
            where: {
                id
            }
        })
        res.status(200).send(deleteUser)
    } catch (error) {
        console.log(error.message)
        res.status(500).send('Error delete user')
    }
}


