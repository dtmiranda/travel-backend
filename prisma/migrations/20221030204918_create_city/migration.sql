/*
  Warnings:

  - You are about to drop the `Island` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Island`;

-- CreateTable
CREATE TABLE `islands` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cities` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `islandId` VARCHAR(191) NOT NULL,
    `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `cities_islandId_key`(`islandId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `cities` ADD CONSTRAINT `cities_islandId_fkey` FOREIGN KEY (`islandId`) REFERENCES `islands`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
