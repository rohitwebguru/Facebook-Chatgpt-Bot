/*
  Warnings:

  - You are about to drop the `ww_messages` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `ww_messages`;

-- CreateTable
CREATE TABLE `wp_ww_messages` (
    `request_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` BIGINT NULL,
    `time_received` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `time_responded` TIMESTAMP NULL,
    `sender_id` VARCHAR(255) NULL,
    `message` TEXT NOT NULL,
    `response` TEXT NULL,
    `context` VARCHAR(255) NULL,
    `platform` VARCHAR(255) NULL,
    `client_id` VARCHAR(255) NULL,
    `recipient_id` VARCHAR(255) NULL,
    `is_sent` BOOLEAN NULL,

    PRIMARY KEY (`request_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
