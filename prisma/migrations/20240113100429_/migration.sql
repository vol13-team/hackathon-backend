/*
  Warnings:

  - You are about to drop the column `IsuueDetail` on the `Issue` table. All the data in the column will be lost.
  - Added the required column `IssueDetail` to the `Issue` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Issue" DROP CONSTRAINT "Issue_OptionsID_fkey";

-- AlterTable
ALTER TABLE "Issue" DROP COLUMN "IsuueDetail",
ADD COLUMN     "IssueDetail" TEXT NOT NULL,
ALTER COLUMN "OptionsID" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Issue" ADD CONSTRAINT "Issue_OptionsID_fkey" FOREIGN KEY ("OptionsID") REFERENCES "IssueOptions"("OptionID") ON DELETE SET NULL ON UPDATE CASCADE;
