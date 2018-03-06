CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers_data
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT FALSE,
	PRIMARY KEY (id)
);
