/*
  Warnings:

  - You are about to drop the column `exerciseId` on the `ExerciseImage` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ExerciseImage" DROP CONSTRAINT "ExerciseImage_exerciseId_fkey";

-- AlterTable
ALTER TABLE "Exercise" ADD COLUMN     "exerciseImageId" INTEGER;

-- AlterTable
ALTER TABLE "ExerciseImage" DROP COLUMN "exerciseId";

-- AddForeignKey
ALTER TABLE "Exercise" ADD CONSTRAINT "Exercise_exerciseImageId_fkey" FOREIGN KEY ("exerciseImageId") REFERENCES "ExerciseImage"("id") ON DELETE SET NULL ON UPDATE CASCADE;
