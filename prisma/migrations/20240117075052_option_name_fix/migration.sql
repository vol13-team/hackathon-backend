/*
  Warnings:

  - The primary key for the `Answer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `AnserUserID` on the `Answer` table. All the data in the column will be lost.
  - You are about to drop the column `AnswerID` on the `Answer` table. All the data in the column will be lost.
  - You are about to drop the column `Decision` on the `Answer` table. All the data in the column will be lost.
  - You are about to drop the column `IssueID` on the `Answer` table. All the data in the column will be lost.
  - You are about to drop the column `selectOptionID` on the `Answer` table. All the data in the column will be lost.
  - The primary key for the `Article` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ArticleID` on the `Article` table. All the data in the column will be lost.
  - You are about to drop the column `ArticleLink` on the `Article` table. All the data in the column will be lost.
  - You are about to drop the column `ArticleTitle` on the `Article` table. All the data in the column will be lost.
  - You are about to drop the column `ArticleUserName` on the `Article` table. All the data in the column will be lost.
  - The primary key for the `Issue` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ArticleID` on the `Issue` table. All the data in the column will be lost.
  - You are about to drop the column `CorrectOption` on the `Issue` table. All the data in the column will be lost.
  - You are about to drop the column `IssueDetail` on the `Issue` table. All the data in the column will be lost.
  - You are about to drop the column `IssueID` on the `Issue` table. All the data in the column will be lost.
  - You are about to drop the column `IssueName` on the `Issue` table. All the data in the column will be lost.
  - You are about to drop the column `Option1` on the `Issue` table. All the data in the column will be lost.
  - You are about to drop the column `Option2` on the `Issue` table. All the data in the column will be lost.
  - You are about to drop the column `Option3` on the `Issue` table. All the data in the column will be lost.
  - You are about to drop the column `Option4` on the `Issue` table. All the data in the column will be lost.
  - You are about to drop the column `PostUserID` on the `Issue` table. All the data in the column will be lost.
  - You are about to drop the column `Update_at` on the `Issue` table. All the data in the column will be lost.
  - You are about to drop the column `Visibility` on the `Issue` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Update_at` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `UserID` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `UserName` on the `User` table. All the data in the column will be lost.
  - The required column `answer_id` was added to the `Answer` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `answer_user_id` to the `Answer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `decision` to the `Answer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `issue_id` to the `Answer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `select_option` to the `Answer` table without a default value. This is not possible if the table is not empty.
  - The required column `article_id` was added to the `Article` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `article_link` to the `Article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `article_title` to the `Article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `article_user_name` to the `Article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `article_id` to the `Issue` table without a default value. This is not possible if the table is not empty.
  - Added the required column `correct_option` to the `Issue` table without a default value. This is not possible if the table is not empty.
  - Added the required column `issue_detail` to the `Issue` table without a default value. This is not possible if the table is not empty.
  - The required column `issue_id` was added to the `Issue` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `issue_name` to the `Issue` table without a default value. This is not possible if the table is not empty.
  - Added the required column `option1` to the `Issue` table without a default value. This is not possible if the table is not empty.
  - Added the required column `option2` to the `Issue` table without a default value. This is not possible if the table is not empty.
  - Added the required column `option3` to the `Issue` table without a default value. This is not possible if the table is not empty.
  - Added the required column `option4` to the `Issue` table without a default value. This is not possible if the table is not empty.
  - Added the required column `post_user_id` to the `Issue` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_at` to the `Issue` table without a default value. This is not possible if the table is not empty.
  - Added the required column `visibility` to the `Issue` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_at` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_name` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Answer" DROP CONSTRAINT "Answer_AnserUserID_fkey";

-- DropForeignKey
ALTER TABLE "Answer" DROP CONSTRAINT "Answer_IssueID_fkey";

-- DropForeignKey
ALTER TABLE "Issue" DROP CONSTRAINT "Issue_ArticleID_fkey";

-- DropForeignKey
ALTER TABLE "Issue" DROP CONSTRAINT "Issue_PostUserID_fkey";

-- AlterTable
ALTER TABLE "Answer" DROP CONSTRAINT "Answer_pkey",
DROP COLUMN "AnserUserID",
DROP COLUMN "AnswerID",
DROP COLUMN "Decision",
DROP COLUMN "IssueID",
DROP COLUMN "selectOptionID",
ADD COLUMN     "answer_id" TEXT NOT NULL,
ADD COLUMN     "answer_user_id" TEXT NOT NULL,
ADD COLUMN     "decision" BOOLEAN NOT NULL,
ADD COLUMN     "issue_id" TEXT NOT NULL,
ADD COLUMN     "select_option" TEXT NOT NULL,
ADD CONSTRAINT "Answer_pkey" PRIMARY KEY ("answer_id");

-- AlterTable
ALTER TABLE "Article" DROP CONSTRAINT "Article_pkey",
DROP COLUMN "ArticleID",
DROP COLUMN "ArticleLink",
DROP COLUMN "ArticleTitle",
DROP COLUMN "ArticleUserName",
ADD COLUMN     "article_id" TEXT NOT NULL,
ADD COLUMN     "article_link" TEXT NOT NULL,
ADD COLUMN     "article_title" TEXT NOT NULL,
ADD COLUMN     "article_user_name" TEXT NOT NULL,
ADD CONSTRAINT "Article_pkey" PRIMARY KEY ("article_id");

-- AlterTable
ALTER TABLE "Issue" DROP CONSTRAINT "Issue_pkey",
DROP COLUMN "ArticleID",
DROP COLUMN "CorrectOption",
DROP COLUMN "IssueDetail",
DROP COLUMN "IssueID",
DROP COLUMN "IssueName",
DROP COLUMN "Option1",
DROP COLUMN "Option2",
DROP COLUMN "Option3",
DROP COLUMN "Option4",
DROP COLUMN "PostUserID",
DROP COLUMN "Update_at",
DROP COLUMN "Visibility",
ADD COLUMN     "article_id" TEXT NOT NULL,
ADD COLUMN     "correct_option" TEXT NOT NULL,
ADD COLUMN     "issue_detail" TEXT NOT NULL,
ADD COLUMN     "issue_id" TEXT NOT NULL,
ADD COLUMN     "issue_name" TEXT NOT NULL,
ADD COLUMN     "option1" TEXT NOT NULL,
ADD COLUMN     "option2" TEXT NOT NULL,
ADD COLUMN     "option3" TEXT NOT NULL,
ADD COLUMN     "option4" TEXT NOT NULL,
ADD COLUMN     "post_user_id" TEXT NOT NULL,
ADD COLUMN     "update_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "visibility" BOOLEAN NOT NULL,
ADD CONSTRAINT "Issue_pkey" PRIMARY KEY ("issue_id");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "Update_at",
DROP COLUMN "UserID",
DROP COLUMN "UserName",
ADD COLUMN     "update_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL,
ADD COLUMN     "user_name" TEXT NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("user_id");

-- AddForeignKey
ALTER TABLE "Issue" ADD CONSTRAINT "Issue_post_user_id_fkey" FOREIGN KEY ("post_user_id") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Issue" ADD CONSTRAINT "Issue_article_id_fkey" FOREIGN KEY ("article_id") REFERENCES "Article"("article_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_issue_id_fkey" FOREIGN KEY ("issue_id") REFERENCES "Issue"("issue_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_answer_user_id_fkey" FOREIGN KEY ("answer_user_id") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;
