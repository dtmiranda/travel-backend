/*
  Warnings:

  - You are about to drop the `Country` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `reservation` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `update_at` to the `cities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_at` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_at` to the `hotels` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_at` to the `islands` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_at` to the `profiles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_at` to the `restaurants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_at` to the `rooms` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_at` to the `thumbnails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_at` to the `tickets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_at` to the `trails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_at` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `profiles` DROP FOREIGN KEY `profiles_countryId_fkey`;

-- DropForeignKey
ALTER TABLE `reservation` DROP FOREIGN KEY `reservation_profileId_fkey`;

-- DropForeignKey
ALTER TABLE `reservation` DROP FOREIGN KEY `reservation_roomId_fkey`;

-- AlterTable
ALTER TABLE `cities` ADD COLUMN `update_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `events` ADD COLUMN `update_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `hotels` ADD COLUMN `update_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `islands` ADD COLUMN `update_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `profiles` ADD COLUMN `update_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `restaurants` ADD COLUMN `update_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `rooms` ADD COLUMN `update_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `thumbnails` ADD COLUMN `update_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `tickets` ADD COLUMN `update_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `trails` ADD COLUMN `update_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `update_at` DATETIME(3) NOT NULL;

-- DropTable
DROP TABLE `Country`;

-- DropTable
DROP TABLE `reservation`;

-- CreateTable
CREATE TABLE `reservations` (
    `id` VARCHAR(191) NOT NULL,
    `profileId` VARCHAR(191) NOT NULL,
    `roomId` VARCHAR(191) NOT NULL,
    `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `countries` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `profiles` ADD CONSTRAINT `profiles_countryId_fkey` FOREIGN KEY (`countryId`) REFERENCES `countries`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reservations` ADD CONSTRAINT `reservations_profileId_fkey` FOREIGN KEY (`profileId`) REFERENCES `profiles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reservations` ADD CONSTRAINT `reservations_roomId_fkey` FOREIGN KEY (`roomId`) REFERENCES `rooms`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
