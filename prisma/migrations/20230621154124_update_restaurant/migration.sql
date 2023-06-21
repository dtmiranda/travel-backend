/*
  Warnings:

  - You are about to drop the column `amenities` on the `restaurants` table. All the data in the column will be lost.
  - You are about to drop the column `coordinate` on the `restaurants` table. All the data in the column will be lost.
  - Added the required column `latitude` to the `restaurants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitude` to the `restaurants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `restaurants` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `restaurants` DROP COLUMN `amenities`,
    DROP COLUMN `coordinate`,
    ADD COLUMN `latitude` VARCHAR(191) NOT NULL,
    ADD COLUMN `longitude` VARCHAR(191) NOT NULL,
    ADD COLUMN `userId` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `_AmenitiesToRestaurant` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_AmenitiesToRestaurant_AB_unique`(`A`, `B`),
    INDEX `_AmenitiesToRestaurant_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `restaurants` ADD CONSTRAINT `restaurants_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AmenitiesToRestaurant` ADD CONSTRAINT `_AmenitiesToRestaurant_A_fkey` FOREIGN KEY (`A`) REFERENCES `amenities`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AmenitiesToRestaurant` ADD CONSTRAINT `_AmenitiesToRestaurant_B_fkey` FOREIGN KEY (`B`) REFERENCES `restaurants`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
