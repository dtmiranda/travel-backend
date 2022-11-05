/*
  Warnings:

  - You are about to drop the column `hotelId` on the `thumbnails` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `thumbnails` DROP FOREIGN KEY `thumbnails_hotelId_fkey`;

-- AlterTable
ALTER TABLE `thumbnails` DROP COLUMN `hotelId`;

-- CreateTable
CREATE TABLE `thumbnails_hotels` (
    `id` VARCHAR(191) NOT NULL,
    `hotelId` VARCHAR(191) NOT NULL,
    `thumbnailId` VARCHAR(191) NOT NULL,
    `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `thumbnails_hotels` ADD CONSTRAINT `thumbnails_hotels_hotelId_fkey` FOREIGN KEY (`hotelId`) REFERENCES `hotels`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `thumbnails_hotels` ADD CONSTRAINT `thumbnails_hotels_thumbnailId_fkey` FOREIGN KEY (`thumbnailId`) REFERENCES `thumbnails`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
