/*
  Warnings:

  - You are about to drop the column `event_coodenate` on the `events` table. All the data in the column will be lost.
  - You are about to alter the column `start_date` on the `events` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.
  - You are about to alter the column `end_date` on the `events` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.
  - You are about to alter the column `event_hour` on the `events` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.
  - A unique constraint covering the columns `[cityId]` on the table `events` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cityId` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `event_coordenate` to the `events` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `events` DROP COLUMN `event_coodenate`,
    ADD COLUMN `cityId` VARCHAR(191) NOT NULL,
    ADD COLUMN `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `event_coordenate` VARCHAR(191) NOT NULL,
    MODIFY `price` DECIMAL(65, 30) NOT NULL,
    MODIFY `start_date` DATETIME(3) NOT NULL,
    MODIFY `end_date` DATETIME(3) NOT NULL,
    MODIFY `event_hour` DATETIME(3) NOT NULL;

-- CreateTable
CREATE TABLE `trails` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `start_coordinate` VARCHAR(191) NOT NULL,
    `end_coordinate` VARCHAR(191) NOT NULL,
    `price` DECIMAL(65, 30) NOT NULL,
    `duration` DATETIME(3) NOT NULL,
    `cityId` VARCHAR(191) NOT NULL,
    `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `trails_cityId_key`(`cityId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ticket` (
    `id` VARCHAR(191) NOT NULL,
    `profileId` VARCHAR(191) NOT NULL,
    `eventId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `events_cityId_key` ON `events`(`cityId`);

-- AddForeignKey
ALTER TABLE `trails` ADD CONSTRAINT `trails_cityId_fkey` FOREIGN KEY (`cityId`) REFERENCES `cities`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `events` ADD CONSTRAINT `events_cityId_fkey` FOREIGN KEY (`cityId`) REFERENCES `cities`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ticket` ADD CONSTRAINT `Ticket_profileId_fkey` FOREIGN KEY (`profileId`) REFERENCES `profiles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ticket` ADD CONSTRAINT `Ticket_eventId_fkey` FOREIGN KEY (`eventId`) REFERENCES `events`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
