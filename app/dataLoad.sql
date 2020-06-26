INSERT INTO customers
    (companyName, contactPerson, email, phoneNumber)
VALUES('United States', 'Bob Barker', 'bob@bob.com', '111-333-7777');

INSERT INTO manufacturers
    (companyName, contactPerson, email, phoneNumber)
VALUES('China', 'Random Name', 'random@china.cz', '333-123-8643');

INSERT INTO items
    (name, description)
VALUES('Engine', 'This that make the car go vroom vroom');

INSERT INTO items
    (name, description)
VALUES('Doors', 'They open and close');

INSERT INTO purchase_order
    (manufacturer, item, qty_ordered, date_ordered, date_recieved)
VALUES(1, 1, 3, '2002-10-11', '2003-10-11');

INSERT INTO sales_order
    (customer, user_id, item, qty_ordered, date_ordered, date_recieved)
VALUES(1, 3, 2, 3, '2002-10-11', '2003-10-11');