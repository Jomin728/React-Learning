-- AlterTable
ALTER TABLE "User" ADD COLUMN     "band" TEXT,
ADD COLUMN     "certification" TEXT[],
ADD COLUMN     "projectEndDate" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "projectTitle" TEXT NOT NULL,
    "projectDescription" TEXT NOT NULL,
    "tags" TEXT[],
    "projectContact" TEXT NOT NULL,
    "managerEmail" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "projectLocation" TEXT NOT NULL,
    "account" TEXT NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Applicants" (
    "id" TEXT NOT NULL,
    "appliedDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL,
    "applicantUserId" TEXT NOT NULL,

    CONSTRAINT "Applicants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "appliedToProject" (
    "projectId" TEXT NOT NULL,
    "applicantId" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "appliedToProject_pkey" PRIMARY KEY ("projectId","applicantId")
);

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Applicants" ADD CONSTRAINT "Applicants_applicantUserId_fkey" FOREIGN KEY ("applicantUserId") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appliedToProject" ADD CONSTRAINT "appliedToProject_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appliedToProject" ADD CONSTRAINT "appliedToProject_applicantId_fkey" FOREIGN KEY ("applicantId") REFERENCES "Applicants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
