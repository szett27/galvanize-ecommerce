CREATE TABLE users(
	id serial PRIMARY KEY,
	firstName VARCHAR (50) NOT NULL,
	lastName VARCHAR (50) NOT NULL,
	email VARCHAR (355) UNIQUE NOT NULL
);

CREATE TABLE customers(
	id serial PRIMARY KEY,
	companyName VARCHAR (50) NOT NULL,
	contactPerson VARCHAR (355) NOT NULL,
	email VARCHAR (355) UNIQUE NOT NULL,
    phoneNumber VARCHAR (20)
);

CREATE TABLE manufacturers(
	id serial PRIMARY KEY,
	companyName VARCHAR (50) NOT NULL,
	contactPerson VARCHAR (355) NOT NULL,
	email VARCHAR (355) UNIQUE NOT NULL,
    phoneNumber VARCHAR (20)
);

CREATE TABLE items(
	id serial PRIMARY KEY,
	name VARCHAR (355) NOT NULL,
	description TEXT NOT NULL
);

CREATE TABLE purchase_order(
	id serial PRIMARY KEY,
    user_id INT REFERENCES users(id),
    manufacturer INT REFERENCES manufacturers(id),
    item INT REFERENCES items(id),
    qty_ordered INT,
    date_ordered DATE,
    date_recieved DATE
);


CREATE TABLE sales_order(
	id serial PRIMARY KEY,
    customer INT REFERENCES customers(id),
    user_id INT REFERENCES users(id),
    item INT REFERENCES items(id),
    qty_ordered INT,
    date_ordered DATE,
    date_recieved DATE
);




