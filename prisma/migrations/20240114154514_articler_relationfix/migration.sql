-- DropForeignKey
ALTER TABLE "Issue" DROP CONSTRAINT "Issue_IssueID_fkey";

-- AddForeignKey
ALTER TABLE "Issue" ADD CONSTRAINT "Issue_ArticleID_fkey" FOREIGN KEY ("ArticleID") REFERENCES "Article"("ArticleID") ON DELETE CASCADE ON UPDATE CASCADE;
