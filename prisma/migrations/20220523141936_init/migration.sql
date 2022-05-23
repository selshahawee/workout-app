/*
  Warnings:

  - You are about to drop the column `age` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lasName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `streakCount` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `weight` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `UserLog` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserLog" DROP CONSTRAINT "UserLog_userId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "age",
DROP COLUMN "firstName",
DROP COLUMN "gender",
DROP COLUMN "lasName",
DROP COLUMN "streakCount",
DROP COLUMN "weight";

-- AlterTable
ALTER TABLE "UserLog" DROP COLUMN "userId";
