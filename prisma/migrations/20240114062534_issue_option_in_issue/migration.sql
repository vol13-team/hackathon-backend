/*
  Warnings:

  - You are about to drop the column `OptionsID` on the `Issue` table. All the data in the column will be lost.
  - You are about to drop the `IssueOptions` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `CorrectOption` to the `Issue` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Option1` to the `Issue` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Option2` to the `Issue` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Option3` to the `Issue` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Option4` to the `Issue` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Answer" DROP CONSTRAINT "Answer_selectOptionID_fkey";

-- DropForeignKey
ALTER TABLE "Issue" DROP CONSTRAINT "Issue_OptionsID_fkey";

-- AlterTable
ALTER TABLE "Issue" DROP COLUMN "OptionsID",
ADD COLUMN     "CorrectOption" TEXT NOT NULL,
ADD COLUMN     "Option1" TEXT NOT NULL,
ADD COLUMN     "Option2" TEXT NOT NULL,
ADD COLUMN     "Option3" TEXT NOT NULL,
ADD COLUMN     "Option4" TEXT NOT NULL;

-- DropTable
DROP TABLE "IssueOptions";
