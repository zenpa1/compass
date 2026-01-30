-- CreateTable
CREATE TABLE `User` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(50) NOT NULL,
    `google_id` VARCHAR(21) NULL,
    `full_name` VARCHAR(50) NULL,
    `avatar_url` TEXT NULL,
    `user_type` ENUM('OWNER', 'EMPLOYEE') NOT NULL DEFAULT 'EMPLOYEE',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `User_email_key`(`email`),
    UNIQUE INDEX `User_google_id_key`(`google_id`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserProfile` (
    `profile_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `primary_role` ENUM('PHOTO', 'VIDEO', 'EDITOR', 'ASSISTANT', 'ANY') NOT NULL,
    `secondary_role` ENUM('PHOTO', 'VIDEO', 'EDITOR', 'ASSISTANT', 'ANY') NULL,
    `reliability_score` DECIMAL(5, 2) NOT NULL DEFAULT 100.00,

    UNIQUE INDEX `UserProfile_user_id_key`(`user_id`),
    PRIMARY KEY (`profile_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Project` (
    `project_id` INTEGER NOT NULL AUTO_INCREMENT,
    `project_name` VARCHAR(50) NOT NULL,
    `client_name` VARCHAR(50) NOT NULL,
    `project_location` TEXT NOT NULL,
    `project_description` VARCHAR(500) NOT NULL,
    `project_start_date` DATETIME(3) NOT NULL,
    `project_end_date` DATETIME(3) NOT NULL,
    `project_status` ENUM('ACTIVE', 'ARCHIVED') NOT NULL DEFAULT 'ACTIVE',

    PRIMARY KEY (`project_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Work` (
    `work_id` INTEGER NOT NULL AUTO_INCREMENT,
    `project_id` INTEGER NOT NULL,
    `project_role` VARCHAR(50) NOT NULL,
    `role_category` ENUM('PHOTO', 'VIDEO', 'EDITOR', 'ASSISTANT', 'ANY') NOT NULL,
    `expected_salary` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `is_open_pool` BOOLEAN NOT NULL DEFAULT false,
    `work_description` VARCHAR(255) NOT NULL,
    `work_start_date` DATETIME(3) NOT NULL,
    `work_start_time` DATETIME(3) NULL,
    `work_end_time` DATETIME(3) NULL,
    `work_status` ENUM('PENDING', 'OPEN', 'ASSIGNED', 'REVIEW', 'COMPLETED') NOT NULL DEFAULT 'OPEN',

    PRIMARY KEY (`work_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Assignment` (
    `assignment_id` INTEGER NOT NULL AUTO_INCREMENT,
    `work_id` INTEGER NOT NULL,
    `user_id` INTEGER NULL,
    `outsider_name` VARCHAR(100) NULL,
    `assignment_status` ENUM('PENDING', 'CONFIRMED') NOT NULL DEFAULT 'PENDING',
    `withdrawal_reason` TEXT NULL,

    PRIMARY KEY (`assignment_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `WorkApplication` (
    `application_id` INTEGER NOT NULL AUTO_INCREMENT,
    `work_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,
    `application_status` ENUM('PENDING', 'APPROVED', 'REJECTED') NOT NULL DEFAULT 'PENDING',

    PRIMARY KEY (`application_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Task` (
    `task_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `task_title` VARCHAR(100) NOT NULL,
    `task_desc` VARCHAR(255) NULL,
    `due_date` DATETIME(3) NULL,

    PRIMARY KEY (`task_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tag` (
    `tag_id` INTEGER NOT NULL AUTO_INCREMENT,
    `tag_name` VARCHAR(50) NOT NULL,
    `color_hex` VARCHAR(7) NOT NULL DEFAULT '#808080',

    UNIQUE INDEX `Tag_tag_name_key`(`tag_name`),
    PRIMARY KEY (`tag_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TaskTag` (
    `task_tag_id` INTEGER NOT NULL AUTO_INCREMENT,
    `task_id` INTEGER NOT NULL,
    `tag_id` INTEGER NOT NULL,

    PRIMARY KEY (`task_tag_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserProfile` ADD CONSTRAINT `UserProfile_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Work` ADD CONSTRAINT `Work_project_id_fkey` FOREIGN KEY (`project_id`) REFERENCES `Project`(`project_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Assignment` ADD CONSTRAINT `Assignment_work_id_fkey` FOREIGN KEY (`work_id`) REFERENCES `Work`(`work_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Assignment` ADD CONSTRAINT `Assignment_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`user_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `WorkApplication` ADD CONSTRAINT `WorkApplication_work_id_fkey` FOREIGN KEY (`work_id`) REFERENCES `Work`(`work_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `WorkApplication` ADD CONSTRAINT `WorkApplication_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Task` ADD CONSTRAINT `Task_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TaskTag` ADD CONSTRAINT `TaskTag_task_id_fkey` FOREIGN KEY (`task_id`) REFERENCES `Task`(`task_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TaskTag` ADD CONSTRAINT `TaskTag_tag_id_fkey` FOREIGN KEY (`tag_id`) REFERENCES `Tag`(`tag_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
