-- DropForeignKey
ALTER TABLE "ExerciseData" DROP CONSTRAINT "ExerciseData_profileDataId_fkey";

-- DropForeignKey
ALTER TABLE "ProfileBodyData" DROP CONSTRAINT "ProfileBodyData_profileDataId_fkey";

-- AddForeignKey
ALTER TABLE "ProfileBodyData" ADD CONSTRAINT "ProfileBodyData_profileDataId_fkey" FOREIGN KEY ("profileDataId") REFERENCES "ProfileData"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerciseData" ADD CONSTRAINT "ExerciseData_profileDataId_fkey" FOREIGN KEY ("profileDataId") REFERENCES "ProfileData"("id") ON DELETE CASCADE ON UPDATE CASCADE;
