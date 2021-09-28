CREATE TABLE users (
	"user_id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"email" varchar(1000) NOT NULL UNIQUE,
	CONSTRAINT "users_pk" PRIMARY KEY ("user_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE product (
	"product_id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"price" float NOT NULL,
	CONSTRAINT "product_pk" PRIMARY KEY ("product_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE cart (
	"cart_id" serial NOT NULL,
	"quantity" int NOT NULL,
	"user_id" int NOT NULL,
	"product_id" int NOT NULL,
	CONSTRAINT "cart_pk" PRIMARY KEY ("cart_id")
) WITH (
  OIDS=FALSE
);

ALTER TABLE "cart" ADD CONSTRAINT "cart_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("user_id");
ALTER TABLE "cart" ADD CONSTRAINT "cart_fk1" FOREIGN KEY ("product_id") REFERENCES "product"("product_id");

--INSERT USERS--
INSERT INTO users (name,email)
VALUES ('USER 1','user1@hotmail.com'),
('USER 2','user2@hotmail.com'),
('USER 3','user3@hotmail.com');

--INSERT PRODUCTS--
INSERT INTO product (name, price)
VALUES ('Sword', 199.99),
('Bow', 99.99),
('Arrows', 2.99),
('Shield', 149.99),
('Axe', 124.99);

--CART ENTRIES---
INSERT INTO cart (quantity,user_id,product_id)
VALUES (1,1,2),(20,1,3),(1,2,1),(1,2,4),(1,3,5),(1,3,4);

--Get all products in your first user’s cart
select p.name
from product p
join cart c on c.product_id = p.product_id
where c.user_id = 1;

--Get products in all carts with all the users’ information
select u.*, p.name
from users u
join cart c on c.user_id = u.user_id
join product p on p.product_id = c.product_id;

--Get the total cost of an order (sum the price of all products on an cart).
select sum(c.quantity * p.price)
from product p
join cart c on c.product_id = p.product_id
where c.user_id = 1;

--Update the quantity of a product in a user’s cart where the user’s id is 2
select sum(c.quantity * p.price)
from product p
join cart c on c.product_id = p.product_id
where c.user_id = 2;
