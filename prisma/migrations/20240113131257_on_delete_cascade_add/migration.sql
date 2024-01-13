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

-- AddForeignKey
ALTER TABLE "Issue" ADD CONSTRAINT "Issue_OptionsID_fkey" FOREIGN KEY ("OptionsID") REFERENCES "IssueOptions"("OptionID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Issue" ADD CONSTRAINT "Issue_PostUserID_fkey" FOREIGN KEY ("PostUserID") REFERENCES "User"("UserID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Issue" ADD CONSTRAINT "Issue_IssueID_fkey" FOREIGN KEY ("IssueID") REFERENCES "Article"("ArticleID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_IssueID_fkey" FOREIGN KEY ("IssueID") REFERENCES "Issue"("IssueID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_AnserUserID_fkey" FOREIGN KEY ("AnserUserID") REFERENCES "User"("UserID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_selectOptionID_fkey" FOREIGN KEY ("selectOptionID") REFERENCES "IssueOptions"("OptionID") ON DELETE CASCADE ON UPDATE CASCADE;
