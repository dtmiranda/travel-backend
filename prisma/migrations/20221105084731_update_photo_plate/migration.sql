/*
  Warnings:

  - You are about to drop the column `roomId` on the `photos_plates` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `photos_plates` DROP FOREIGN KEY `photos_plates_roomId_fkey`;

-- AlterTable
ALTER TABLE `photos_plates` DROP COLUMN `roomId`;
