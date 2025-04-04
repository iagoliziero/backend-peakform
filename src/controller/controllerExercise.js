import { PrismaClient, Intensity } from "@prisma/client";

const prisma = new PrismaClient();

export async function createExercise(req, res) { 
    const {title, numberSeries, repetitions, advancedTechnique, intensity, description, profileDataId} = req.body;
    
    // Check if the intensity is valid
    const validIntesity = Object.values(Intensity);
    if (!validIntesity.includes(intensity)) {
        return res.status(400).send('Intensity must be low, medium or high')
    }

    const userExists = await prisma.profileData.findUnique({
        where: { 
            id: parseInt(profileDataId)
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
                        id: parseInt(profileDataId)
                    }
                }
            },
        })
        res.status(201).json(createExercise);
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Error creating exercise')
    }
}