-- CreateTable
CREATE TABLE "User" (
    "user_id" TEXT NOT NULL,
    "user_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Issue" (
    "issue_id" TEXT NOT NULL,
    "issue_name" TEXT NOT NULL,
    "issue_detail" TEXT NOT NULL,
    "visibility" BOOLEAN NOT NULL,
    "option1" TEXT NOT NULL,
    "option2" TEXT NOT NULL,
    "option3" TEXT NOT NULL,
    "option4" TEXT NOT NULL,
    "correct_option" TEXT NOT NULL,
    "post_user_id" TEXT NOT NULL,
    "explanation" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,
    "article_id" TEXT NOT NULL,

    CONSTRAINT "Issue_pkey" PRIMARY KEY ("issue_id")
);

-- CreateTable
CREATE TABLE "Article" (
    "article_id" TEXT NOT NULL,
    "article_title" TEXT NOT NULL,
    "article_link" TEXT NOT NULL,
    "article_user_name" TEXT NOT NULL,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("article_id")
);

-- CreateTable
CREATE TABLE "Answer" (
    "answer_id" TEXT NOT NULL,
    "decision" BOOLEAN NOT NULL,
    "issue_id" TEXT NOT NULL,
    "answer_user_id" TEXT NOT NULL,
    "select_option_id" TEXT NOT NULL,

    CONSTRAINT "Answer_pkey" PRIMARY KEY ("answer_id")
);

-- CreateTable
CREATE TABLE "Quiita" (
    "title" TEXT NOT NULL,
    "url" TEXT,
    "user" TEXT NOT NULL,
    "icon_url" TEXT NOT NULL,
    "tags" TEXT NOT NULL,

    CONSTRAINT "Quiita_pkey" PRIMARY KEY ("title")
);

-- AddForeignKey
ALTER TABLE "Issue" ADD CONSTRAINT "Issue_post_user_id_fkey" FOREIGN KEY ("post_user_id") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Issue" ADD CONSTRAINT "Issue_article_id_fkey" FOREIGN KEY ("article_id") REFERENCES "Article"("article_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_issue_id_fkey" FOREIGN KEY ("issue_id") REFERENCES "Issue"("issue_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_answer_user_id_fkey" FOREIGN KEY ("answer_user_id") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;
