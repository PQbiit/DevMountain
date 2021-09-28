-------------PROBLEM 1-------------
CREATE TABLE orders(
    order_id SERIAL PRIMARY KEY,
    person_id VARCHAR(150),
    product_name VARCHAR(150),
    product_price NUMERIC,
    quantity INTEGER
);

-------------PROBLEM 2-------------
INSERT INTO orders (person_id,product_name,product_price,quantity)
VALUES (1,'Laptop',1200,1),
(1,'Laptop Case',30,1),
(2,'Flat screen TV',799.99,2),
(2,'TV stand',45.50,2),
(3,'Wireless Headphones',399.99,1);

-------------PROBLEM 3-------------
--Select all the records from the orders table.--
SELECT * 
FROM orders;

-------------PROBLEM 4-------------
--Calculate the total number of products ordered.--
SELECT SUM(quantity)
FROM orders

-------------PROBLEM 5-------------
--Calculate the total order price.--
SELECT order_id, product_price * quantity
FROM orders

-------------PROBLEM 6-------------
--Calculate the total order price by a single person_id.--
SELECT SUM(product_price * quantity)
FROM orders
WHERE person_id = '1';