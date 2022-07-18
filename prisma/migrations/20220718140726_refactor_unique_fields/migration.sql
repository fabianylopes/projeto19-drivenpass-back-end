/*
  Warnings:

  - A unique constraint covering the columns `[userId,title]` on the table `cards` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,title]` on the table `credentials` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,title]` on the table `documents` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,title]` on the table `secureNotes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,title]` on the table `wifi` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "cards_title_key";

-- DropIndex
DROP INDEX "cards_userId_key";

-- DropIndex
DROP INDEX "credentials_title_key";

-- DropIndex
DROP INDEX "credentials_userId_key";

-- DropIndex
DROP INDEX "documents_registryNumber_key";

-- DropIndex
DROP INDEX "documents_title_key";

-- DropIndex
DROP INDEX "documents_userId_key";

-- DropIndex
DROP INDEX "secureNotes_title_key";

-- DropIndex
DROP INDEX "secureNotes_userId_key";

-- DropIndex
DROP INDEX "wifi_title_key";

-- DropIndex
DROP INDEX "wifi_userId_key";

-- CreateIndex
CREATE UNIQUE INDEX "cards_userId_title_key" ON "cards"("userId", "title");

-- CreateIndex
CREATE UNIQUE INDEX "credentials_userId_title_key" ON "credentials"("userId", "title");

-- CreateIndex
CREATE UNIQUE INDEX "documents_userId_title_key" ON "documents"("userId", "title");

-- CreateIndex
CREATE UNIQUE INDEX "secureNotes_userId_title_key" ON "secureNotes"("userId", "title");

-- CreateIndex
CREATE UNIQUE INDEX "wifi_userId_title_key" ON "wifi"("userId", "title");
