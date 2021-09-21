-------------PROBLEM 1------------
--List all employee first and last names only that live in Calgary.--
SELECT first_name, last_name
FROM employee
WHERE city = 'Calgary';

-------------PROBLEM 2------------
--Find the birthdate for the YOUNGEST employee.--
SELECT *
FROM employee
ORDER BY birth_date ASC
LIMIT 1;

-------------PROBLEM 3------------
--Find the birthdate for the OLDEST employee.--
SELECT birth_date
FROM employee
ORDER BY birth_date DESC
LIMIT 1;


-------------PROBLEM 4------------
--Find everyone that reports to Nancy Edwards --
SELECT employee_id
FROM employee
WHERE first_name = 'Nancy' AND last_name = 'Edwards';

SELECT *
FROM employee
WHERE reports_to = '2';

-------------PROBLEM 5------------
--Count how many people live in Lethbridge.--
SELECT COUNT(*)
FROM employee
WHERE city = 'Lethbridge';