-- CreateTable
CREATE TABLE `assignment` (
    `assignment_id` INTEGER NOT NULL AUTO_INCREMENT,
    `work_id` INTEGER NOT NULL,
    `user_id` INTEGER NULL,
    `outsider_name` VARCHAR(100) NULL,
    `assignment_status` ENUM('PENDING', 'CONFIRMED') NOT NULL DEFAULT 'PENDING',
    `withdrawal_reason` TEXT NULL,

    INDEX `Assignment_user_id_fkey`(`user_id`),
    INDEX `Assignment_work_id_fkey`(`work_id`),
    PRIMARY KEY (`assignment_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `project` (
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
CREATE TABLE `tag` (
    `tag_id` INTEGER NOT NULL AUTO_INCREMENT,
    `tag_name` VARCHAR(50) NOT NULL,
    `color_hex` VARCHAR(7) NOT NULL DEFAULT '#808080',

    UNIQUE INDEX `Tag_tag_name_key`(`tag_name`),
    PRIMARY KEY (`tag_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `task` (
    `task_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `task_title` VARCHAR(100) NOT NULL,
    `task_desc` VARCHAR(255) NULL,
    `due_date` DATETIME(3) NULL,
    `is_completed` BOOLEAN NOT NULL DEFAULT false,

    INDEX `Task_user_id_fkey`(`user_id`),
    PRIMARY KEY (`task_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tasktag` (
    `task_tag_id` INTEGER NOT NULL AUTO_INCREMENT,
    `task_id` INTEGER NOT NULL,
    `tag_id` INTEGER NOT NULL,

    INDEX `TaskTag_tag_id_fkey`(`tag_id`),
    INDEX `TaskTag_task_id_fkey`(`task_id`),
    PRIMARY KEY (`task_tag_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(50) NOT NULL,
    `google_id` VARCHAR(21) NULL,
    `full_name` VARCHAR(50) NULL,
    `avatar_url` TEXT NULL,
    `user_type` ENUM('OWNER', 'ADMIN', 'EMPLOYEE') NOT NULL DEFAULT 'EMPLOYEE',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `inactive` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `User_email_key`(`email`),
    UNIQUE INDEX `User_google_id_key`(`google_id`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `userprofile` (
    `profile_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `primary_role` ENUM('PHOTO', 'VIDEO', 'EDITOR', 'ASSISTANT', 'ANY') NOT NULL DEFAULT 'PHOTO',
    `secondary_role` ENUM('PHOTO', 'VIDEO', 'EDITOR', 'ASSISTANT', 'ANY') NULL,
    `reliability_score` DECIMAL(5, 2) NOT NULL DEFAULT 100.00,
    `is_setup_complete` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `UserProfile_user_id_key`(`user_id`),
    PRIMARY KEY (`profile_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `work` (
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

    INDEX `Work_project_id_fkey`(`project_id`),
    PRIMARY KEY (`work_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `workapplication` (
    `application_id` INTEGER NOT NULL AUTO_INCREMENT,
    `work_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,
    `application_status` ENUM('PENDING', 'APPROVAL', 'APPROVED', 'REJECTED') NOT NULL DEFAULT 'PENDING',

    INDEX `WorkApplication_user_id_fkey`(`user_id`),
    INDEX `WorkApplication_work_id_fkey`(`work_id`),
    PRIMARY KEY (`application_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `assignment` ADD CONSTRAINT `Assignment_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `assignment` ADD CONSTRAINT `Assignment_work_id_fkey` FOREIGN KEY (`work_id`) REFERENCES `work`(`work_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `task` ADD CONSTRAINT `Task_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tasktag` ADD CONSTRAINT `TaskTag_tag_id_fkey` FOREIGN KEY (`tag_id`) REFERENCES `tag`(`tag_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tasktag` ADD CONSTRAINT `TaskTag_task_id_fkey` FOREIGN KEY (`task_id`) REFERENCES `task`(`task_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `userprofile` ADD CONSTRAINT `UserProfile_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `work` ADD CONSTRAINT `Work_project_id_fkey` FOREIGN KEY (`project_id`) REFERENCES `project`(`project_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `workapplication` ADD CONSTRAINT `WorkApplication_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `workapplication` ADD CONSTRAINT `WorkApplication_work_id_fkey` FOREIGN KEY (`work_id`) REFERENCES `work`(`work_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
