/*
  Warnings:

  - You are about to drop the column `description` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `published` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `thumbnailUrl` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `tel` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Tag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TagsOnPosts` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `price` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TagsOnPosts" DROP CONSTRAINT "TagsOnPosts_postId_fkey";

-- DropForeignKey
ALTER TABLE "TagsOnPosts" DROP CONSTRAINT "TagsOnPosts_tagId_fkey";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "description",
DROP COLUMN "published",
DROP COLUMN "thumbnailUrl",
DROP COLUMN "title",
ADD COLUMN     "logoImg" TEXT,
ADD COLUMN     "price" INTEGER NOT NULL,
ALTER COLUMN "createdAt" DROP DEFAULT,
ALTER COLUMN "updatedAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "name",
DROP COLUMN "tel",
ADD COLUMN     "password" TEXT NOT NULL;

-- DropTable
DROP TABLE "Tag";

-- DropTable
DROP TABLE "TagsOnPosts";
