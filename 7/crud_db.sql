CREATE TABLE categories (
  id    INTEGER PRIMARY KEY, 
  name  TEXT
);

CREATE TABLE products (
  id     INTEGER, 
  name   TEXT, 
  category_id INTEGER,
  FOREIGN KEY(category_id) REFERENCES categories(id)
);

INSERT INTO categories VALUES (1, "Peralatan Mandi");
INSERT INTO categories VALUES (2, "Mie Instant");
INSERT INTO categories VALUES (3, "Olahan Daging");


/* Masukkan nilai */
INSERT INTO products VALUES (1, "Shampo", 1);
INSERT INTO products VALUES (2, "Sikat Gigi", 1);
INSERT INTO products VALUES (3, "Indome", 2);
INSERT INTO products VALUES (4, "Mie Sedap", 2);
INSERT INTO products VALUES (5, "Nugget", 3);

SELECT * FROM products;
SELECT * FROM categories;
SELECT categories.id, categories.name AS category_name, products.name AS procuts
FROM products INNER JOIN categories ON categories.id=products.category_id;