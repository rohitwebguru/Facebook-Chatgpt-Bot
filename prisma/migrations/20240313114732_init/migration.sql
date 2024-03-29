-- AlterTable
ALTER TABLE `ww_messages` MODIFY `recipient_id` INTEGER NULL,
    MODIFY `sender_id` INTEGER NULL,
    MODIFY `message` TEXT NULL,
    MODIFY `platform` VARCHAR(255) NULL,
    MODIFY `context` VARCHAR(255) NULL,
    MODIFY `time_responded` DATETIME(3) NULL,
    MODIFY `client_id` INTEGER NULL,
    MODIFY `user_id` INTEGER NULL,
    MODIFY `response` TEXT NULL,
    MODIFY `is_sent` BOOLEAN NULL DEFAULT false,
    MODIFY `request_id` INTEGER NULL;
