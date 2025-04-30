import jwt from "jsonwebtoken";
import prisma from "../config/dbConfig.js";

const SECRET = process.env.SECRET


export async function createUser(req, res) { 
    const { name, email, date, password, profileBodyData} = req.body;

    if(password.length <= 7) {
        return res.status(404).send("Password must be as least 7 characters long")
    }

    try {
        const createUser = await prisma.profileData.create({
            data: {
                name,
                email,
                date,
                password,
                profileBodyData: {
                    create: profileBodyData
                },
            },
            include: {
                profileBodyData: true
            }
        })
        const token = jwt.sign({profileDataId: createUser.id}, SECRET, {expiresIn: '1h'})
        res.status(201).json({user: createUser, auth: true, token});
    } catch (error) {
        console.error(error);
        res.status(500).send('Error creating user');
    }
}

export async function getUser(req, res) {

    try {
        const userId = req.user.profileDataId;
        const getUser = await prisma.profileData.findUnique({
            where: {
                id: parseInt(userId)
            },
            include: {
                profileBodyData: true,
            }
        })
        res.status(200).send(getUser)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error get user')
    }
}

export async function updateUser(req, res) {
   
    const { name, email, date, password } = req.body;
    const userId = req.user.profileDataId;
    const userExists = await prisma.profileData.findUnique({
        where: { 
            id: userId
        }
      });
  
      if (!userExists) {
        return res.status(404).send("User not found", req.body);
      }

    if(password.length <= 7) {
        return res.status(404).send("Password must be as least 7 characters long")
    }

    try {
        const updateUser = await prisma.profileData.update({
            where: {
                id: userId
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
        console.log(error)
        res.status(500).send('Error put user')
    }
}

export async function deleteUser(req, res) {

    const userId = req.user.profileDataId;
    const userExists = await prisma.profileData.findUnique({
        where: { 
            id: userId
        }
      });
  
      if (!userExists) {
        return res.status(404).send("User not found", req.body);
      }

    try {
        const deleteUser = await prisma.profileData.delete({
            where: {
                id: userId
            }
        })
        res.status(200).send(deleteUser)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error delete user')
    }
}


