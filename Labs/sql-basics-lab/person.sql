-------------PROBLEM 1-------------
CREATE TABLE person(
    person_id SERIAL PRIMARY KEY,
    name VARCHAR(150),
    age INTEGER,
    height NUMERIC,
    city VARCHAR(150),
    favorite_color VARCHAR(50)
);

-------------PROBLEM 2-------------
INSERT INTO person (name,age,height,city,favorite_color)
VALUES ('Robert A. Taylor',23,178,'Riverside, CA','Purple'),
('Florence S. Clodfelter',37,170,'New York City, NY','Blue'),
('Ronnie M. Berry',59,171,'Houston, TX','Red'),
('Carol C. Sams',48,165,'Salt Lake City, UT','Purple'),
('Teresa M. Delarosa',20,154,'Seattle, WA','Green');

-------------PROBLEM 3-------------
--Select all the people in the person table by height from tallest to shortest.--
SELECT *
FROM person
ORDER BY height DESC;

-------------PROBLEM 4-------------
--Select all the people in the person table by height from shortest to tallest.--
SELECT *
FROM person
ORDER BY height ASC;

-------------PROBLEM 5-------------
--Select all the people in the person table by age from oldest to youngest.--
SELECT *
FROM person
ORDER BY age DESC;

-------------PROBLEM 6-------------
--Select all the people in the person table older than age 20.--
SELECT *
FROM person
WHERE age > 20;

-------------PROBLEM 7-------------
--Select all the people in the person table that are exactly 18.--
SELECT *
FROM person
WHERE age = 18;

-------------PROBLEM 8-------------
--Select all the people in the person table that are less than 20 and older than 30.--
SELECT *
FROM person
WHERE age < 20 OR age > 30;

-------------PROBLEM 9-------------
--Select all the people in the person table that are not 27 (use not equals)--
SELECT *
FROM person
WHERE age <> 27;

-------------PROBLEM 10-------------
--Select all the people in the person table where their favorite color is not red.
SELECT *
FROM person
WHERE favorite_color != 'Red';

-------------PROBLEM 11-------------
--Select all the people in the person table where their favorite color is not red and is not blue.--
SELECT *
FROM person
WHERE favorite_color <> 'Blue' AND favorite_color != 'Red';

-------------PROBLEM 12-------------
--Select all the people in the person table where their favorite color is orange or green.
SELECT *
FROM person
WHERE favorite_color = 'Orange' OR favorite_color = 'Green';

-------------PROBLEM 13-------------
--Select all the people in the person table where their favorite color is orange, green or blue (use IN).--
SELECT *
FROM person
WHERE favorite_color IN ('Orange','Green','Blue');


-------------PROBLEM 14-------------
--Select all the people in the person table where their favorite color is yellow or purple (use IN).--
SELECT *
FROM person
WHERE favorite_color IN ('Yellow','Purple');