-- CreateTable
CREATE TABLE "GymDay" (
    "id" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "activeWorkout" BOOLEAN NOT NULL,
    "workoutStart" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "workoutFinish" TIMESTAMP(3) NOT NULL,
    "workoutId" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "GymDay_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "GymDay" ADD CONSTRAINT "GymDay_workoutId_fkey" FOREIGN KEY ("workoutId") REFERENCES "Workout"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GymDay" ADD CONSTRAINT "GymDay_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
