DROP DATABASE IF EXISTS postapp;
CREATE DATABASE postapp;
USE postapp;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    external_user_id VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    mail_address VARCHAR(255) NOT NULL,
    comments VARCHAR(255) NOT NULL,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP DEFAULT NULL
)DEFAULT CHARSET=utf8 CHARACTER SET=utf8;
 
INSERT INTO users (external_user_id, name,password,mail_address,comments,created_at,updated_at) VALUES ("111", "LBJ", "$2a$10$vi6eTbSKkrInMFUa0bcsleUWLydWWzQOVhPBKtLMXo4UgiZw44ZK2", "test1@gmail.com", "NBA Player","2022-10-10 18:32:09","2022-10-10 18:32:09");
INSERT INTO users (external_user_id, name,password,mail_address,comments,created_at,updated_at) VALUES ("222", "KD", "$2a$10$L9W.NdD0j4/dhogwwZhtxueL2QxaV2fKtihLmxm.9MLbBI0R7segu", "test2@gmail.com", "NBA Player","2022-10-10 18:32:09","2022-10-10 18:32:09");
INSERT INTO users (external_user_id, name,password,mail_address,comments,created_at,updated_at) VALUES ("333", "AD", "$2a$10$JKHNvHo5ax9eeUk51zFSMu/JKktl60YrfkjnjgUwf8RqhKc2wuqxu", "test3@gmail.com", "NBA Player","2022-10-10 18:32:09","2022-10-10 18:32:09");