/*
  Warnings:

  - You are about to drop the `Tags` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_IssueTags` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_IssueTags" DROP CONSTRAINT "_IssueTags_A_fkey";

-- DropForeignKey
ALTER TABLE "_IssueTags" DROP CONSTRAINT "_IssueTags_B_fkey";

-- DropTable
DROP TABLE "Tags";

-- DropTable
DROP TABLE "_IssueTags";
