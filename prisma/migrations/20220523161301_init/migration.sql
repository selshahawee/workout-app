/*
  Warnings:

  - Added the required column `userId` to the `UserLog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "age" INTEGER,
ADD COLUMN     "firstName" VARCHAR(25),
ADD COLUMN     "gender" TEXT,
ADD COLUMN     "height" INTEGER,
ADD COLUMN     "lastName" VARCHAR(25),
ADD COLUMN     "password" VARCHAR(50),
ADD COLUMN     "streakCount" INTEGER,
ADD COLUMN     "weight" INTEGER;

-- AlterTable
ALTER TABLE "UserLog" ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "UserLog" ADD CONSTRAINT "UserLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
