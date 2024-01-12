/*
  Warnings:

  - The primary key for the `Answer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Article` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Issue` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `IssueOptions` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Tags` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `UserIcon` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Answer" DROP CONSTRAINT "Answer_AnserUserID_fkey";

-- DropForeignKey
ALTER TABLE "Answer" DROP CONSTRAINT "Answer_IssueID_fkey";

-- DropForeignKey
ALTER TABLE "Answer" DROP CONSTRAINT "Answer_selectOptionID_fkey";

-- DropForeignKey
ALTER TABLE "Issue" DROP CONSTRAINT "Issue_IssueID_fkey";

-- DropForeignKey
ALTER TABLE "Issue" DROP CONSTRAINT "Issue_OptionsID_fkey";

-- DropForeignKey
ALTER TABLE "Issue" DROP CONSTRAINT "Issue_PostUserID_fkey";

-- DropForeignKey
ALTER TABLE "_IssueTags" DROP CONSTRAINT "_IssueTags_A_fkey";

-- DropForeignKey
ALTER TABLE "_IssueTags" DROP CONSTRAINT "_IssueTags_B_fkey";

-- AlterTable
ALTER TABLE "Answer" DROP CONSTRAINT "Answer_pkey",
ALTER COLUMN "AnswerID" DROP DEFAULT,
ALTER COLUMN "AnswerID" SET DATA TYPE TEXT,
ALTER COLUMN "IssueID" SET DATA TYPE TEXT,
ALTER COLUMN "AnserUserID" SET DATA TYPE TEXT,
ALTER COLUMN "selectOptionID" SET DATA TYPE TEXT,
ADD CONSTRAINT "Answer_pkey" PRIMARY KEY ("AnswerID");
DROP SEQUENCE "Answer_AnswerID_seq";

-- AlterTable
ALTER TABLE "Article" DROP CONSTRAINT "Article_pkey",
ALTER COLUMN "ArticleID" DROP DEFAULT,
ALTER COLUMN "ArticleID" SET DATA TYPE TEXT,
ALTER COLUMN "ArticleThumbnail" DROP NOT NULL,
ADD CONSTRAINT "Article_pkey" PRIMARY KEY ("ArticleID");
DROP SEQUENCE "Article_ArticleID_seq";

-- AlterTable
ALTER TABLE "Issue" DROP CONSTRAINT "Issue_pkey",
ALTER COLUMN "IssueID" DROP DEFAULT,
ALTER COLUMN "IssueID" SET DATA TYPE TEXT,
ALTER COLUMN "OptionsID" SET DATA TYPE TEXT,
ALTER COLUMN "PostUserID" SET DATA TYPE TEXT,
ALTER COLUMN "IssueTagsID" SET DATA TYPE TEXT,
ADD CONSTRAINT "Issue_pkey" PRIMARY KEY ("IssueID");
DROP SEQUENCE "Issue_IssueID_seq";

-- AlterTable
ALTER TABLE "IssueOptions" DROP CONSTRAINT "IssueOptions_pkey",
ALTER COLUMN "OptionID" DROP DEFAULT,
ALTER COLUMN "OptionID" SET DATA TYPE TEXT,
ALTER COLUMN "CorrectOption" SET DATA TYPE TEXT,
ADD CONSTRAINT "IssueOptions_pkey" PRIMARY KEY ("OptionID");
DROP SEQUENCE "IssueOptions_OptionID_seq";

-- AlterTable
ALTER TABLE "Tags" DROP CONSTRAINT "Tags_pkey",
ALTER COLUMN "TagID" DROP DEFAULT,
ALTER COLUMN "TagID" SET DATA TYPE TEXT,
ADD CONSTRAINT "Tags_pkey" PRIMARY KEY ("TagID");
DROP SEQUENCE "Tags_TagID_seq";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "UserIcon",
ALTER COLUMN "UserID" DROP DEFAULT,
ALTER COLUMN "UserID" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("UserID");
DROP SEQUENCE "User_UserID_seq";

-- AlterTable
ALTER TABLE "_IssueTags" ALTER COLUMN "A" SET DATA TYPE TEXT,
ALTER COLUMN "B" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Issue" ADD CONSTRAINT "Issue_OptionsID_fkey" FOREIGN KEY ("OptionsID") REFERENCES "IssueOptions"("OptionID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Issue" ADD CONSTRAINT "Issue_PostUserID_fkey" FOREIGN KEY ("PostUserID") REFERENCES "User"("UserID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Issue" ADD CONSTRAINT "Issue_IssueID_fkey" FOREIGN KEY ("IssueID") REFERENCES "Article"("ArticleID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_IssueID_fkey" FOREIGN KEY ("IssueID") REFERENCES "Issue"("IssueID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_AnserUserID_fkey" FOREIGN KEY ("AnserUserID") REFERENCES "User"("UserID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_selectOptionID_fkey" FOREIGN KEY ("selectOptionID") REFERENCES "IssueOptions"("OptionID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IssueTags" ADD CONSTRAINT "_IssueTags_A_fkey" FOREIGN KEY ("A") REFERENCES "Issue"("IssueID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IssueTags" ADD CONSTRAINT "_IssueTags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tags"("TagID") ON DELETE CASCADE ON UPDATE CASCADE;
