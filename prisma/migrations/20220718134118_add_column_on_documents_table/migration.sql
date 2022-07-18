/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `documents` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `title` to the `documents` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "documents" ADD COLUMN     "title" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "documents_title_key" ON "documents"("title");
