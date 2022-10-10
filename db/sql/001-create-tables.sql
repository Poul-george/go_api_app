DROP DATABASE IF EXISTS postapp;
CREATE DATABASE postapp;
USE postapp;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id INT(10) NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    -- created_at TIMESTAMP NOT NULL DEFAULT '0000-00-00 00:00:00',
    -- updated_at TIMESTAMP NOT NULL DEFAULT '0000-00-00 00:00:00',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
)DEFAULT CHARSET=utf8 CHARACTER SET=utf8;
 
INSERT INTO users (name,author,created_at,updated_at) VALUES ("LBJ", "NBA Player","2022-10-10 18:32:09","2022-10-10 18:32:09");
INSERT INTO users (name,author,created_at,updated_at) VALUES ("KD", "NBA Player","2022-10-10 18:32:09","2022-10-10 18:32:09");
INSERT INTO users (name,author,created_at,updated_at) VALUES ("AD", "NBA Player","2022-10-10 18:32:09","2022-10-10 18:32:09");