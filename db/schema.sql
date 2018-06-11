-- ### Schema

DROP DATABASE burgers_db; 
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id INT NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(255) NOT NULL,
	devoured BOOLEAN default false,
	PRIMARY KEY (id)
);


insert into burgers (burger_name) values ('Portabello Char'),('Hawaiian'),('Jalapeno Jack'); 

select * from burgers;