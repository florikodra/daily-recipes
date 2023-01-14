DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(255),
	PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`first_name` VARCHAR(100),
	`last_name` VARCHAR(100),
	`email` VARCHAR(255),
	`password` VARCHAR(255),
	`role_id` INT NOT NULL,
	`active` BOOLEAN NOT NULL DEFAULT 1,
	`created_at` TIMESTAMP,
	`updated_at` TIMESTAMP,
	PRIMARY KEY (`id`),
    FOREIGN KEY (`role_id`) REFERENCES roles(`id`)
);

DROP TABLE IF EXISTS `recipes`;
CREATE TABLE `recipes` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`user_id` INT NOT NULL,
	`name` VARCHAR(255),
	`description` LONGTEXT,
	`no_servings` DECIMAL,
	`prep_time` DECIMAL,
	`cook_time` INT,
	`ingredients` LONGTEXT,
	`method` LONGTEXT,
	`note` LONGTEXT,
	`publish` BOOLEAN NOT NULL DEFAULT 1,
	`created_at` TIMESTAMP,
	`updated_at` TIMESTAMP,
	PRIMARY KEY (`id`),
    FOREIGN KEY (`user_id`) REFERENCES users(`id`)
);

DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(255),
	`description` LONGTEXT,
	`parent_id` INT,
	PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `recipe_categories`;
CREATE TABLE `recipe_categories` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`recipe_id` INT,
	`category_id` INT,
	PRIMARY KEY (`id`),
    FOREIGN KEY (`recipe_id`) REFERENCES recipes(`id`),
    FOREIGN KEY (`category_id`) REFERENCES categories(`id`)
);