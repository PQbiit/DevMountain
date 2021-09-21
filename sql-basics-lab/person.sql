-------------PROBLEM 1-------------
CREATE TABLE person (
    person_id SERIAL PRIMARY KEY,
    name VARCHAR(150),
    age INTEGER,
    height NUMERIC,
    city VARCHAR(150),
    favorite_color VARCHAR(50)
);

-------------PROBLEM 2-------------
INSERT INTO person (name,age,height,city,favorite_color)
VALUES ('Robert A. Taylor',37,178,'Riverside, CA','Purple'),
('Florence S. Clodfelter',23,170,'New York City, NY','Blue'),
('Ronnie M. Berry',59,171,'Houston, TX','Red'),
('Carol C. Sams',48,165,'Salt Lake City, UT','Purple'),
('Teresa M. Delarosa',20,154,'Seattle, WA','Green');

-------------PROBLEM 3-------------
SELECT *
FROM person
ORDER BY height DESC;

-------------PROBLEM 4-------------
SELECT *
FROM person
ORDER BY height ASC;

-------------PROBLEM 5-------------
SELECT *
FROM person
ORDER BY age DESC;

-------------PROBLEM 6-------------
SELECT *
FROM person
WHERE age > 20;
