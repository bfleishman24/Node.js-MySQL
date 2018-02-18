-- Drops the animals_db if it exists currently --
DROP DATABASE IF EXISTS bamazon_db;
-- Creates the "animals_db" database --
CREATE DATABASE bamazon_db;

-- Makes it so all of the following code will affect animals_db --
USE bamazon_db;

-- Creates the table "people" within animals_db --
CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  -- Makes a string column called "name" which cannot contain null --
  product_name VARCHAR(30) NOT NULL,
  -- Makes a boolean column called "has_pet" which cannot contain null --
  department_name VARCHAR(30) NOT NULL,
  -- Makes a sting column called "pet_name" --
  price DECIMAL(10,2) NULL,
  -- Makes an numeric column called "pet_age" --
  stock_quantity INT NULL,
  PRIMARY KEY (id)
);

-- Creates new rows containing data in all named columns --
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fender Jazz Bass", "Music", 250.00, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bears Jersey", "Sports", 150.00, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("PlayStation 4 Controller", "Electronics", 250.00, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fender Jaguar Bass", "Music", 350.00, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Football", "Sports", 20.00, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Headset", "Electronics", 50.00, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Blankies", "Childrens", 10.00, 75);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hair Ties", "Childrens", 5.20, 105);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sans Amp", "Music", 175.00, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bears Mug", "sports", 15.00, 18);



