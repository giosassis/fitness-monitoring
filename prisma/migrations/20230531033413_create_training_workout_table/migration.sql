-- CreateTable
CREATE TABLE "TrainingSeries" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "personalId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "series" INTEGER NOT NULL,
    "repetitions" INTEGER NOT NULL,
    "restTime" DOUBLE PRECISION,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TrainingSeries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_TrainingSeriesExercises" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_TrainingSeriesExercises_AB_unique" ON "_TrainingSeriesExercises"("A", "B");

-- CreateIndex
CREATE INDEX "_TrainingSeriesExercises_B_index" ON "_TrainingSeriesExercises"("B");

-- AddForeignKey
ALTER TABLE "TrainingSeries" ADD CONSTRAINT "TrainingSeries_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrainingSeries" ADD CONSTRAINT "TrainingSeries_personalId_fkey" FOREIGN KEY ("personalId") REFERENCES "Personal"("personal_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrainingSeriesExercises" ADD CONSTRAINT "_TrainingSeriesExercises_A_fkey" FOREIGN KEY ("A") REFERENCES "Exercise"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrainingSeriesExercises" ADD CONSTRAINT "_TrainingSeriesExercises_B_fkey" FOREIGN KEY ("B") REFERENCES "TrainingSeries"("id") ON DELETE CASCADE ON UPDATE CASCADE;
