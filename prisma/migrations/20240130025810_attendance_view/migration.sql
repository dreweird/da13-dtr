-- CreateTable
CREATE TABLE `attendance` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Department` VARCHAR(11) NULL,
    `Name` VARCHAR(12) NULL,
    `No.` INTEGER NULL,
    `Date/Time` VARCHAR(22) NULL,
    `Status` VARCHAR(8) NULL,
    `Location ID` INTEGER NULL,
    `ID Number` VARCHAR(10) NULL,
    `Workcode` INTEGER NULL,
    `VerifyCode` VARCHAR(4) NULL,
    `CardNo` VARCHAR(10) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
