CREATE DATABASE chat;

USE chat;

-- CREATE TABLE total (
--   /* Describe your table here.*/
--     ID int NOT NULL AUTO_INCREMENT,
--     Username varchar(255),
--     Roomname varchar(255),
--     Message varchar(255),
--     PRIMARY KEY (ID)
-- );

CREATE TABLE messages (
  UserID int NOT NULL,
  Roomname varchar(255),
  Message varchar(255),
  MessageID int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (MessageID)
);

CREATE Table users (
  Username varchar(255),
  ID int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (ID)
);





/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

