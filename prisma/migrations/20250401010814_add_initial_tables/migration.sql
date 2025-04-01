-- CreateEnum
CREATE TYPE "ObesityLevel" AS ENUM ('NORMAL', 'GRADE_1', 'GRADE_2', 'GRADE_3');

-- CreateEnum
CREATE TYPE "WeightStatus" AS ENUM ('UNDERWEIGHT', 'NORMAL_WEIGHT', 'OVERWEIGHT', 'OBESITY', 'SEVERE_OBESITY');

-- CreateEnum
CREATE TYPE "Intensity" AS ENUM ('HEAVY', 'MODERATE', 'LIGHT');

-- CreateTable
CREATE TABLE "ProfileData" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" VARCHAR(255) NOT NULL,

    CONSTRAINT "ProfileData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProfileBodyData" (
    "id" SERIAL NOT NULL,
    "gender" TEXT,
    "weight" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "goalWeight" INTEGER NOT NULL,
    "imc" DOUBLE PRECISION NOT NULL,
    "obesityLevel" "ObesityLevel",
    "weightStatus" "WeightStatus",
    "profileDataId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProfileBodyData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExerciseData" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "numberSeries" TEXT NOT NULL,
    "repetitions" TEXT NOT NULL,
    "advancedTechnique" TEXT NOT NULL,
    "intensity" "Intensity" NOT NULL,
    "description" TEXT,
    "profileDataId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ExerciseData_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProfileData_email_key" ON "ProfileData"("email");

-- AddForeignKey
ALTER TABLE "ProfileBodyData" ADD CONSTRAINT "ProfileBodyData_profileDataId_fkey" FOREIGN KEY ("profileDataId") REFERENCES "ProfileData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerciseData" ADD CONSTRAINT "ExerciseData_profileDataId_fkey" FOREIGN KEY ("profileDataId") REFERENCES "ProfileData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
