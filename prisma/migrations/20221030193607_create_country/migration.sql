/*
  Warnings:

  - A unique constraint covering the columns `[countryId]` on the table `profiles` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `countryId` to the `profiles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `profiles` ADD COLUMN `countryId` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Country` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `profiles_countryId_key` ON `profiles`(`countryId`);

-- AddForeignKey
ALTER TABLE `profiles` ADD CONSTRAINT `profiles_countryId_fkey` FOREIGN KEY (`countryId`) REFERENCES `Country`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
