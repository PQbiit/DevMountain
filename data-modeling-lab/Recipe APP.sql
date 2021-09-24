-- create tables & set primary & foreign keys constrains

CREATE TABLE users (
	"user_id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("user_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE authentication (
	"auth_id" serial NOT NULL,
	"email" varchar(1000) NOT NULL UNIQUE,
	"password" varchar(50) NOT NULL,
	"user_id" int NOT NULL,
	CONSTRAINT "authentication_pk" PRIMARY KEY ("auth_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE grocery_list (
	"list_id" serial NOT NULL,
	"user_id" int NOT NULL,
	"items" TEXT NOT NULL,
	CONSTRAINT "grocery_list_pk" PRIMARY KEY ("list_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE recipe (
	"recipe_id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"ingredients" TEXT NOT NULL,
	"instructions" TEXT NOT NULL,
	"is_private" bool NOT NULL DEFAULT 'false',
	"user_id" int NOT NULL,
	CONSTRAINT "recipe_pk" PRIMARY KEY ("recipe_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE occasion (
	"occasion_id" serial NOT NULL,
	"user_id" int NOT NULL,
	"name" varchar(255) NOT NULL,
	CONSTRAINT "occasion_pk" PRIMARY KEY ("occasion_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE assigned_recipe (
	"ar_id" serial NOT NULL,
	"occasion_id" int NOT NULL,
	"recipe_id" int NOT NULL,
	CONSTRAINT "assigned_recipe_pk" PRIMARY KEY ("ar_id")
) WITH (
  OIDS=FALSE
);

ALTER TABLE "authentication" ADD CONSTRAINT "authentication_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("user_id");
ALTER TABLE "grocery_list" ADD CONSTRAINT "grocery_list_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("user_id");
ALTER TABLE "recipe" ADD CONSTRAINT "recipe_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("user_id");
ALTER TABLE "occasion" ADD CONSTRAINT "occasion_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("user_id");
ALTER TABLE "assigned_recipe" ADD CONSTRAINT "assigned_recipe_fk0" FOREIGN KEY ("occasion_id") REFERENCES "occasion"("occasion_id");
ALTER TABLE "assigned_recipe" ADD CONSTRAINT "assigned_recipe_fk1" FOREIGN KEY ("recipe_id") REFERENCES "recipe"("recipe_id");

-- populate USER table

INSERT INTO users (name)
VALUES ('Alfonso'),
('Keaton');

-- populate AUTHENTICATION table

INSERT INTO authentication (email,password,user_id)
VALUES ('alfonso@hotmail.com','qwerty1',1),
('keaton@hotmail.com','qwerty2',2);

-- populate RECIPE table

INSERT INTO recipe (name,ingredients,instructions,is_private,user_id)
VALUES ('Peppercorn Steak','Peppercorn Steak ingredients','Peppercorn Steak instructions',false,2),
('Greek Salad','Greek Salad ingredients','Greek Salad instructions',false,1),
('Mocha Espresso Ice Cream','Mocha Espresso Ice Cream ingredients','Mocha Espresso Ice Cream instructions',false,2),
('Risotto with Asparagus and Bacon','Risotto with Asparagus and Bacon ingredients','Risotto with Asparagus and Bacon instructions',false,1);

-- populate GROCERY LIST table

INSERT INTO grocery_list (user_id,items)
VALUES (2,'Peppercorn Steak ingredients'),
(1,'Risotto with Asparagus and Bacon ingredients');

-- populate occasion table

INSERT INTO occasion (user_id,name)
VALUES (2,'Family Dinner Night'),
(1,'Mom´s birthday');

-- populate assigned_recipe table

INSERT INTO assigned_recipe (occasion_id,recipe_id)
VALUES (1,1),(1,2),(2,4),(2,3);

