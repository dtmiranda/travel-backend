/*
  Warnings:

  - You are about to drop the column `link` on the `photos_plates` table. All the data in the column will be lost.
  - Added the required column `photoId` to the `photos_plates` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `photos_plates` DROP COLUMN `link`,
    ADD COLUMN `photoId` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `photos_rooms` (
    `id` VARCHAR(191) NOT NULL,
    `roomId` VARCHAR(191) NOT NULL,
    `photoId` VARCHAR(191) NOT NULL,
    `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `photos_plates` ADD CONSTRAINT `photos_plates_photoId_fkey` FOREIGN KEY (`photoId`) REFERENCES `photos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `photos_rooms` ADD CONSTRAINT `photos_rooms_roomId_fkey` FOREIGN KEY (`roomId`) REFERENCES `rooms`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `photos_rooms` ADD CONSTRAINT `photos_rooms_photoId_fkey` FOREIGN KEY (`photoId`) REFERENCES `photos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
