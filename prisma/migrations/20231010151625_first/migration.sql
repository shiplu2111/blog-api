-- CreateTable
CREATE TABLE `User` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(50) NOT NULL,
    `middleName` VARCHAR(50) NOT NULL,
    `lastName` VARCHAR(50) NOT NULL,
    `mobile` VARCHAR(15) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `passwordHash` VARCHAR(32) NOT NULL,
    `registeredAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `lastLogin` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `intro` TINYTEXT NOT NULL,
    `profile` TEXT NOT NULL,

    UNIQUE INDEX `User_mobile_key`(`mobile`),
    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Category` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `parentId` BIGINT UNSIGNED NOT NULL,
    `title` VARCHAR(75) NOT NULL,
    `metaTitle` VARCHAR(100) NOT NULL,
    `slug` VARCHAR(100) NOT NULL,
    `content` TEXT NOT NULL,

    UNIQUE INDEX `Category_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tag` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(75) NOT NULL,
    `metaTitle` VARCHAR(100) NOT NULL,
    `slug` VARCHAR(100) NOT NULL,
    `content` TEXT NOT NULL,

    UNIQUE INDEX `Tag_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PostCategory` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `postId` BIGINT UNSIGNED NOT NULL,
    `categoryId` BIGINT UNSIGNED NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Post` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `authorId` BIGINT UNSIGNED NOT NULL,
    `parentId` BIGINT UNSIGNED NULL,
    `title` VARCHAR(75) NOT NULL,
    `metaTitle` VARCHAR(100) NULL,
    `slug` VARCHAR(100) NOT NULL,
    `summary` TINYTEXT NULL,
    `published` TINYINT NOT NULL,
    `createAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updateAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `publishedAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `content` TEXT NOT NULL,

    UNIQUE INDEX `Post_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PostTag` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `postId` BIGINT UNSIGNED NOT NULL,
    `tagId` BIGINT UNSIGNED NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PostMeta` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `postId` BIGINT UNSIGNED NOT NULL,
    `key` VARCHAR(50) NULL,
    `content` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PostComment` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `postId` BIGINT UNSIGNED NOT NULL,
    `parentId` BIGINT UNSIGNED NOT NULL,
    `title` VARCHAR(100) NOT NULL,
    `published` TINYINT NOT NULL,
    `createAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `publishedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `content` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PostCategory` ADD CONSTRAINT `PostCategory_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `Post`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PostCategory` ADD CONSTRAINT `PostCategory_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PostTag` ADD CONSTRAINT `PostTag_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `Post`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PostTag` ADD CONSTRAINT `PostTag_tagId_fkey` FOREIGN KEY (`tagId`) REFERENCES `Tag`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PostMeta` ADD CONSTRAINT `PostMeta_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `Post`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PostComment` ADD CONSTRAINT `PostComment_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `Post`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
