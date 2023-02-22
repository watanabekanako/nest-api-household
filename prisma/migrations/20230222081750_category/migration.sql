/*
  Warnings:

  - You are about to drop the column `logoImg` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "logoImg" TEXT;

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "logoImg";
