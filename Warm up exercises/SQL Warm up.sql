CREATE TABLE users(
	user_id SERIAL PRIMARY KEY,
  name VARCHAR(150),
  email VARCHAR(150),
  phone_number VARCHAR(150)
);


INSERT INTO users (name,email,phone_number)
VALUES ('Alfonso','alfonso@gmail.com','5211234567890'),
('Eric','eric@gmail.com','11234567890'),
('Jessica','jessica@gmail.com','520987654321');

UPDATE users
SET email = 'jessica@hotmail.com'
WHERE user_id = 3

select name, phone_number
from users
where user_id = 1;

select email
from users
where email like ('%@hotmail%')

select name, phone_number
from users
order by name desc

DROP TABLE users