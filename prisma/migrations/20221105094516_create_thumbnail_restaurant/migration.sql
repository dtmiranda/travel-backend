/*
  Warnings:

  - You are about to drop the column `restaurantId` on the `thumbnails` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `thumbnails` DROP FOREIGN KEY `thumbnails_restaurantId_fkey`;

-- AlterTable
ALTER TABLE `thumbnails` DROP COLUMN `restaurantId`;

-- CreateTable
CREATE TABLE `thumbnails_restaturant` (
    `id` VARCHAR(191) NOT NULL,
    `restaurantId` VARCHAR(191) NOT NULL,
    `thumbnailId` VARCHAR(191) NOT NULL,
    `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `thumbnails_restaturant` ADD CONSTRAINT `thumbnails_restaturant_restaurantId_fkey` FOREIGN KEY (`restaurantId`) REFERENCES `restaurants`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `thumbnails_restaturant` ADD CONSTRAINT `thumbnails_restaturant_thumbnailId_fkey` FOREIGN KEY (`thumbnailId`) REFERENCES `thumbnails`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
