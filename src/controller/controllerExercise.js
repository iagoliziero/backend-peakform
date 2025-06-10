import pkg from '@prisma/client';
const { Intensity } = pkg;
import prisma from "../config/dbConfig.js";

export async function createExercise(req, res) { 
    const {title, numberSeries, repetitions, advancedTechnique, intensity, description} = req.body;
    
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
        
        const createExercise = await prisma.exerciseData.create({
            data: {
                title,
                numberSeries,
                repetitions,
                advancedTechnique,
                intensity, 
                description,
                profileData: {
                    connect: {
                        id: userId
                    }
                }
            }
        })

        res.status(201).json(createExercise);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error creating exercise')
    }
}

export async function getExercise(req, res) {
    const userId = req.user.profileDataId;
    try {
        const getExercise = await prisma.exerciseData.findMany({ where: { profileDataId: userId } });
        res.status(200).send(getExercise)

    } catch (error) {
        console.log(error)
        res.status(500).send('Error get user')
    }
}

export async function updateExercise(req, res) {
    const id = parseInt(req.params.id)
    const {title, numberSeries, repetitions, advancedTechnique, intensity, description} = req.body;

    // Check if the intensity is valid
    const validIntensity = Object.values(Intensity);
    if(!validIntensity.includes(intensity)) {
        return res.status(400).send('Intensity must be low, medium or high')
    }

    const userId = req.user.profileDataId

    const userExists = await prisma.profileData.findUnique({
        where: { 
            id: userId
        }
      });

      if(!userExists) {
        return res.status(404).send("User not found", req.body);
      }

      const exercise = await prisma.exerciseData.findUnique({
        where: {
            id
        }
      });

      if(!exercise || exercise.profileDataId !== userId) {
         
        return res.status(404).send("Exercise not found or you don't have permission to update it", req.body);
      }

    try {
        const updateExercise = await prisma.exerciseData.update({
            where: {
                id,
            },
            data: {
                title,
                 numberSeries, 
                 repetitions, 
                 advancedTechnique, 
                 intensity, 
                 description,
                 profileData: {
                    connect: {
                        id: userId
                    }
                }
            }
        })
        res.status(201).send(updateExercise)

    } catch (error) {
        console.log(error)
        res.status(500).send('Error put user')
    }
}

export async function deleteExercise(req, res) {
    const id = parseInt(req.params.id)
    const userId = req.user.profileDataId;
    const userExists = await prisma.profileData.findUnique({
        where: { 
            id: userId
        }
      });

      if(!userExists) {
        return res.status(404).send("User not found", req.body);
      }

      const exercise = await prisma.exerciseData.findUnique({
        where: {
            id
        }
      });

      if(!exercise || exercise.profileDataId !== userId) {
        return res.status(404).send("Exercise not found or you don't have permission to delete it", req.body);
      }

    try {
        const deleteExercise = await prisma.exerciseData.delete({
            where: {
                id,
            },
        })
        res.status(200).send(deleteExercise)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error delete exercise')
    }
    
}