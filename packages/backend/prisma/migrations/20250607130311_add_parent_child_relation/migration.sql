-- AlterTable
ALTER TABLE `user` ADD COLUMN `parentId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_parentId_fkey` FOREIGN KEY (`parentId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
