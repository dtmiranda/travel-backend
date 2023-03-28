/*
  Warnings:

  - You are about to drop the column `event_coordenate` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `event_hour` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `coordinate` on the `hotels` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `profiles` table. All the data in the column will be lost.
  - You are about to drop the column `surname` on the `profiles` table. All the data in the column will be lost.
  - You are about to drop the column `daily` on the `rooms` table. All the data in the column will be lost.
  - You are about to drop the column `occupied` on the `rooms` table. All the data in the column will be lost.
  - You are about to drop the `photos_plates` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `photos_rooms` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `plates` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `thumbnails` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `thumbnails_hotels` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `thumbnails_restaturant` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[cityId]` on the table `profiles` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `attendees` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `coordinate` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organizer` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `hotels` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `hotels` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `hotels` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `profiles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cityId` to the `profiles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateOfBirth` to the `profiles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `profiles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `profiles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `profiles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `end_Date` to the `reservations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `guest_count` to the `reservations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start_date` to the `reservations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_price` to the `reservations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `restaurants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `amenities` to the `restaurants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cuisine` to the `restaurants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `restaurants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `menu` to the `restaurants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rating` to the `restaurants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `whatsapp` to the `restaurants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `amenities` to the `rooms` table without a default value. This is not possible if the table is not empty.
  - Added the required column `capacity` to the `rooms` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number` to the `rooms` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rate` to the `rooms` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `rooms` table without a default value. This is not possible if the table is not empty.
  - Added the required column `availability` to the `tickets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `difficulty` to the `trails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `elevation_gain` to the `trails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `length` to the `trails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `terrain` to the `trails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `views` to the `trails` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `duration` on the `trails` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `username` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `photos_plates` DROP FOREIGN KEY `photos_plates_photoId_fkey`;

-- DropForeignKey
ALTER TABLE `photos_plates` DROP FOREIGN KEY `photos_plates_plateId_fkey`;

-- DropForeignKey
ALTER TABLE `photos_rooms` DROP FOREIGN KEY `photos_rooms_photoId_fkey`;

-- DropForeignKey
ALTER TABLE `photos_rooms` DROP FOREIGN KEY `photos_rooms_roomId_fkey`;

-- DropForeignKey
ALTER TABLE `plates` DROP FOREIGN KEY `plates_restaurantId_fkey`;

-- DropForeignKey
ALTER TABLE `thumbnails_hotels` DROP FOREIGN KEY `thumbnails_hotels_hotelId_fkey`;

-- DropForeignKey
ALTER TABLE `thumbnails_hotels` DROP FOREIGN KEY `thumbnails_hotels_thumbnailId_fkey`;

-- DropForeignKey
ALTER TABLE `thumbnails_restaturant` DROP FOREIGN KEY `thumbnails_restaturant_restaurantId_fkey`;

-- DropForeignKey
ALTER TABLE `thumbnails_restaturant` DROP FOREIGN KEY `thumbnails_restaturant_thumbnailId_fkey`;

-- DropIndex
DROP INDEX `events_name_key` ON `events`;

-- DropIndex
DROP INDEX `restaurants_name_key` ON `restaurants`;

-- AlterTable
ALTER TABLE `events` DROP COLUMN `event_coordenate`,
    DROP COLUMN `event_hour`,
    DROP COLUMN `name`,
    ADD COLUMN `attendees` INTEGER NOT NULL,
    ADD COLUMN `category` VARCHAR(191) NOT NULL,
    ADD COLUMN `coordinate` VARCHAR(191) NOT NULL,
    ADD COLUMN `organizer` VARCHAR(191) NOT NULL,
    ADD COLUMN `title` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `hotels` DROP COLUMN `coordinate`,
    ADD COLUMN `address` VARCHAR(191) NOT NULL,
    ADD COLUMN `email` VARCHAR(191) NULL,
    ADD COLUMN `phone` VARCHAR(191) NOT NULL,
    ADD COLUMN `state` VARCHAR(191) NOT NULL,
    ADD COLUMN `website` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `profiles` DROP COLUMN `name`,
    DROP COLUMN `surname`,
    ADD COLUMN `address` VARCHAR(191) NOT NULL,
    ADD COLUMN `cityId` VARCHAR(191) NOT NULL,
    ADD COLUMN `dateOfBirth` DATETIME(3) NOT NULL,
    ADD COLUMN `firstName` VARCHAR(191) NOT NULL,
    ADD COLUMN `lastName` VARCHAR(191) NOT NULL,
    ADD COLUMN `phoneNumber` VARCHAR(191) NOT NULL,
    ADD COLUMN `profilePic` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `reservations` ADD COLUMN `end_Date` DATETIME(3) NOT NULL,
    ADD COLUMN `guest_count` INTEGER NOT NULL,
    ADD COLUMN `start_date` DATETIME(3) NOT NULL,
    ADD COLUMN `total_price` DECIMAL(65, 30) NOT NULL;

-- AlterTable
ALTER TABLE `restaurants` ADD COLUMN `address` VARCHAR(191) NOT NULL,
    ADD COLUMN `amenities` VARCHAR(191) NOT NULL,
    ADD COLUMN `cuisine` VARCHAR(191) NOT NULL,
    ADD COLUMN `description` VARCHAR(191) NOT NULL,
    ADD COLUMN `email` VARCHAR(191) NULL,
    ADD COLUMN `menu` VARCHAR(191) NOT NULL,
    ADD COLUMN `rating` INTEGER NOT NULL,
    ADD COLUMN `website` VARCHAR(191) NULL,
    ADD COLUMN `whatsapp` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `rooms` DROP COLUMN `daily`,
    DROP COLUMN `occupied`,
    ADD COLUMN `amenities` VARCHAR(191) NOT NULL,
    ADD COLUMN `capacity` INTEGER NOT NULL,
    ADD COLUMN `number` INTEGER NOT NULL,
    ADD COLUMN `rate` DECIMAL(65, 30) NOT NULL,
    ADD COLUMN `type` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `tickets` ADD COLUMN `availability` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `trails` ADD COLUMN `difficulty` VARCHAR(191) NOT NULL,
    ADD COLUMN `elevation_gain` DECIMAL(65, 30) NOT NULL,
    ADD COLUMN `length` DECIMAL(65, 30) NOT NULL,
    ADD COLUMN `terrain` VARCHAR(191) NOT NULL,
    ADD COLUMN `views` VARCHAR(191) NOT NULL,
    DROP COLUMN `duration`,
    ADD COLUMN `duration` DECIMAL(65, 30) NOT NULL;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `username` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `photos_plates`;

-- DropTable
DROP TABLE `photos_rooms`;

-- DropTable
DROP TABLE `plates`;

-- DropTable
DROP TABLE `thumbnails`;

-- DropTable
DROP TABLE `thumbnails_hotels`;

-- DropTable
DROP TABLE `thumbnails_restaturant`;

-- CreateTable
CREATE TABLE `Review` (
    `id` VARCHAR(191) NOT NULL,
    `comment` VARCHAR(191) NOT NULL,
    `rating` INTEGER NOT NULL,
    `profileId` VARCHAR(191) NOT NULL,
    `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_EventToReview` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_EventToReview_AB_unique`(`A`, `B`),
    INDEX `_EventToReview_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_RestaurantToReview` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_RestaurantToReview_AB_unique`(`A`, `B`),
    INDEX `_RestaurantToReview_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_PhotoToRestaurant` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_PhotoToRestaurant_AB_unique`(`A`, `B`),
    INDEX `_PhotoToRestaurant_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_PhotoToRoom` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_PhotoToRoom_AB_unique`(`A`, `B`),
    INDEX `_PhotoToRoom_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_HotelToPhoto` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_HotelToPhoto_AB_unique`(`A`, `B`),
    INDEX `_HotelToPhoto_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_HotelToReview` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_HotelToReview_AB_unique`(`A`, `B`),
    INDEX `_HotelToReview_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `profiles_cityId_key` ON `profiles`(`cityId`);

-- CreateIndex
CREATE UNIQUE INDEX `users_username_key` ON `users`(`username`);

-- AddForeignKey
ALTER TABLE `profiles` ADD CONSTRAINT `profiles_cityId_fkey` FOREIGN KEY (`cityId`) REFERENCES `cities`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Review` ADD CONSTRAINT `Review_profileId_fkey` FOREIGN KEY (`profileId`) REFERENCES `profiles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_EventToReview` ADD CONSTRAINT `_EventToReview_A_fkey` FOREIGN KEY (`A`) REFERENCES `events`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_EventToReview` ADD CONSTRAINT `_EventToReview_B_fkey` FOREIGN KEY (`B`) REFERENCES `Review`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_RestaurantToReview` ADD CONSTRAINT `_RestaurantToReview_A_fkey` FOREIGN KEY (`A`) REFERENCES `restaurants`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_RestaurantToReview` ADD CONSTRAINT `_RestaurantToReview_B_fkey` FOREIGN KEY (`B`) REFERENCES `Review`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PhotoToRestaurant` ADD CONSTRAINT `_PhotoToRestaurant_A_fkey` FOREIGN KEY (`A`) REFERENCES `photos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PhotoToRestaurant` ADD CONSTRAINT `_PhotoToRestaurant_B_fkey` FOREIGN KEY (`B`) REFERENCES `restaurants`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PhotoToRoom` ADD CONSTRAINT `_PhotoToRoom_A_fkey` FOREIGN KEY (`A`) REFERENCES `photos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PhotoToRoom` ADD CONSTRAINT `_PhotoToRoom_B_fkey` FOREIGN KEY (`B`) REFERENCES `rooms`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_HotelToPhoto` ADD CONSTRAINT `_HotelToPhoto_A_fkey` FOREIGN KEY (`A`) REFERENCES `hotels`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_HotelToPhoto` ADD CONSTRAINT `_HotelToPhoto_B_fkey` FOREIGN KEY (`B`) REFERENCES `photos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_HotelToReview` ADD CONSTRAINT `_HotelToReview_A_fkey` FOREIGN KEY (`A`) REFERENCES `hotels`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_HotelToReview` ADD CONSTRAINT `_HotelToReview_B_fkey` FOREIGN KEY (`B`) REFERENCES `Review`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
