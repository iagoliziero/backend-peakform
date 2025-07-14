import pkg from '@prisma/client';
const { ObesityLevel, WeightStatus } = pkg;

import prisma from "../config/dbConfig.js";

export async function createBody(req, res) {
    try {
        const {gender, weight, height, goalWeight, imc, obesityLevel, weightStatus} = req.body;

        // Check if a obesity level is valid
        const obesityLevelValid = Object.values(ObesityLevel)
        if(!obesityLevelValid.includes(obesityLevel)) {
            return res.status(404).send('The obesity values are incorrect.')
        }

        // Check if a obesity level is valid
        const weightStatusValid = Object.values(WeightStatus)
        if(!weightStatusValid.includes(weightStatus)) {
            return res.status(404).send('The weight status are incorrect.')
        }

        const userId = req.user.profileDataId;

        //check if user exist
        const userExists = await prisma.profileData.findUnique({
            where: {
                id: userId
            }
        })

        if(!userExists) {
            return res.status(404).send("User not found", req.body);
        }

        const createBody = await prisma.profileBodyData.create({
            data: {
                gender,
                weight: parseInt(weight),
                height: parseInt(height),
                goalWeight: parseInt(goalWeight),
                imc: parseFloat(imc),
                obesityLevel,
                weightStatus,
                profileData: {
                    connect: {
                        id: userId
                    }
                }
            },
        })
        res.status(201).send(createBody)
    } catch (error) {
        res.status(500).send('Error create body infos')
    }
}

export async function getBody(req, res) {

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
        const getBody = await prisma.profileBodyData.findMany({ where: { id: userId } });
        res.status(200).send(getBody)
    } catch (error) {
        console.log(error);
        res.status(500).send('Error get body infos')
    }
}

export async function updateBody(req, res) {
    const id = parseInt(req.params.id)
    const {gender, weight, height, goalWeight, imc, obesityLevel, weightStatus} = req.body;
    const userId = req.user.profileDataId;
    const userExists = await prisma.profileData.findUnique({
        where: { 
            id: userId
        }
      });
  
      if(!userExists) {
        return res.status(404).send("User not found", req.body);
      }

    try {
        const updateBody = await prisma.profileBodyData.update({
            where: {
                id,
            },
            data: {
                gender, 
                weight, 
                height, 
                goalWeight, 
                imc, 
                obesityLevel, 
                weightStatus, 
                profileData: {
                    connect: {
                        id: userId
                    }
                }
            }
        })
        res.status(201).send(updateBody)
    } catch (error) {
        console.log(error);
        res.status(500).send('Error update body infos')
    }
    
}

export async function deleteBody(req, res) {
    const id = parseInt(req.params.id)
    try {
        const deleteBody = await prisma.profileBodyData.delete({
            where: {
                id
            }
        })
        res.status(200).send(deleteBody)
    } catch (error) {
        console.log(error);
        res.status(500).send('Error delete body infos')
    }
}