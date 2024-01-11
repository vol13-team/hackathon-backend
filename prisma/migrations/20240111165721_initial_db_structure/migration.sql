-- CreateTable
CREATE TABLE "User" (
    "UserID" SERIAL NOT NULL,
    "UserName" TEXT NOT NULL,
    "UserIcon" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("UserID")
);

-- CreateTable
CREATE TABLE "Issue" (
    "IssueID" SERIAL NOT NULL,
    "IssueName" TEXT NOT NULL,
    "IsuueDetail" TEXT NOT NULL,
    "Visibility" BOOLEAN NOT NULL,
    "OptionsID" INTEGER NOT NULL,
    "PostUserID" INTEGER NOT NULL,
    "IssueTagsID" INTEGER,
    "explanation" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Issue_pkey" PRIMARY KEY ("IssueID")
);

-- CreateTable
CREATE TABLE "Article" (
    "ArticleID" SERIAL NOT NULL,
    "ArticleTitle" TEXT NOT NULL,
    "ArticleLink" TEXT NOT NULL,
    "ArticleThumbnail" TEXT NOT NULL,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("ArticleID")
);

-- CreateTable
CREATE TABLE "Answer" (
    "AnswerID" SERIAL NOT NULL,
    "Decision" BOOLEAN NOT NULL,
    "IssueID" INTEGER NOT NULL,
    "AnserUserID" INTEGER NOT NULL,
    "selectOptionID" INTEGER NOT NULL,

    CONSTRAINT "Answer_pkey" PRIMARY KEY ("AnswerID")
);

-- CreateTable
CREATE TABLE "IssueOptions" (
    "OptionID" SERIAL NOT NULL,
    "Option1" TEXT NOT NULL,
    "Option2" TEXT NOT NULL,
    "Option3" TEXT NOT NULL,
    "Option4" TEXT NOT NULL,
    "CorrectOption" INTEGER NOT NULL,

    CONSTRAINT "IssueOptions_pkey" PRIMARY KEY ("OptionID")
);

-- CreateTable
CREATE TABLE "Tags" (
    "TagID" SERIAL NOT NULL,
    "TadName" TEXT NOT NULL,

    CONSTRAINT "Tags_pkey" PRIMARY KEY ("TagID")
);

-- CreateTable
CREATE TABLE "_IssueTags" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_IssueTags_AB_unique" ON "_IssueTags"("A", "B");

-- CreateIndex
CREATE INDEX "_IssueTags_B_index" ON "_IssueTags"("B");

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
