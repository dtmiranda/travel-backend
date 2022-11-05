/*
  Warnings:

  - You are about to drop the column `plateId` on the `photos` table. All the data in the column will be lost.
  - You are about to drop the column `roomId` on the `photos` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `cities` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `countries` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `events` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `hotels` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `islands` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `plates` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `restaurants` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `trails` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `photos` DROP FOREIGN KEY `photos_plateId_fkey`;

-- DropForeignKey
ALTER TABLE `photos` DROP FOREIGN KEY `photos_roomId_fkey`;

-- AlterTable
ALTER TABLE `photos` DROP COLUMN `plateId`,
    DROP COLUMN `roomId`;

-- CreateTable
CREATE TABLE `photos_plates` (
    `id` VARCHAR(191) NOT NULL,
    `link` VARCHAR(191) NOT NULL,
    `plateId` VARCHAR(191) NOT NULL,
    `roomId` VARCHAR(191) NOT NULL,
    `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `cities_name_key` ON `cities`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `countries_name_key` ON `countries`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `events_name_key` ON `events`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `hotels_name_key` ON `hotels`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `islands_name_key` ON `islands`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `plates_name_key` ON `plates`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `restaurants_name_key` ON `restaurants`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `trails_name_key` ON `trails`(`name`);

-- AddForeignKey
ALTER TABLE `photos_plates` ADD CONSTRAINT `photos_plates_plateId_fkey` FOREIGN KEY (`plateId`) REFERENCES `plates`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `photos_plates` ADD CONSTRAINT `photos_plates_roomId_fkey` FOREIGN KEY (`roomId`) REFERENCES `rooms`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
