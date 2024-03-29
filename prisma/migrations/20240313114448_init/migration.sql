-- CreateTable
CREATE TABLE `ww_messages` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `time_received` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `recipient_id` INTEGER NOT NULL,
    `sender_id` INTEGER NOT NULL,
    `message` TEXT NOT NULL,
    `platform` VARCHAR(255) NOT NULL,
    `context` VARCHAR(255) NOT NULL,
    `time_responded` DATETIME(3) NOT NULL,
    `client_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,
    `response` TEXT NOT NULL,
    `is_sent` BOOLEAN NOT NULL DEFAULT false,
    `request_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
