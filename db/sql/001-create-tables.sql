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

CREATE TABLE user_details (
    user_id INT(10) NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL, -- 名前
    name_kana VARCHAR(255) NOT NULL, -- カタカナ名
    profession VARCHAR(255) NOT NULL, -- 職業
    occupation VARCHAR(255) NOT NULL, -- 職種
    country_of_citizenship INT(10) NOT NULL, -- 国籍
    age INT(10) NOT NULL, -- 年齢
    birth_date VARCHAR(255) NOT NULL, -- 誕生日
    gender VARCHAR(255) NOT NULL, -- 性別
    height INT(10) NOT NULL, -- 身長
    birth_place VARCHAR(255) NOT NULL, -- 出身地
    residence VARCHAR(255) NOT NULL, -- 居住地
    work_location VARCHAR(255) NOT NULL, -- 勤務地
    annual_income INT(10) NOT NULL, -- 収入
    title_comennt TEXT NOT NULL, -- キャチコピー的な
    profile_comment TEXT NOT NULL, -- 自己紹介コメント

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP DEFAULT NULL
)DEFAULT CHARSET=utf8 CHARACTER SET=utf8;

INSERT INTO user_details (user_id, name, name_kana, profession, occupation, country_of_citizenship, age, birth_date, gender, height, birth_place, residence, work_location, annual_income, title_comennt, profile_comment, created_at, updated_at, deleted_at) VALUES (1, 'LBJ', 'Lebron James', 'アスリート', 'スポーツ選手', 1, 38, '1982-10-10', '1', 206, 'アメリカ', 'アメリカ', 'アメリカ', 1200000, 'Im NBA Player 23', 'test test test test test test', '2023-04-15 22:56:14', '2023-04-15 22:56:14', NULL);


CREATE USER 'docker'@'%' IDENTIFIED BY 'docker';
GRANT ALL PRIVILEGES ON postapp.* TO 'docker'@'%';