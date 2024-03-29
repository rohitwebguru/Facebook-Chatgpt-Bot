-- AlterTable
ALTER TABLE `ww_messages` MODIFY `recipient_id` VARCHAR(255) NULL,
    MODIFY `sender_id` VARCHAR(255) NULL,
    MODIFY `client_id` VARCHAR(255) NULL,
    MODIFY `user_id` VARCHAR(255) NULL,
    MODIFY `request_id` VARCHAR(255) NULL;
