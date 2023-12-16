INSERT INTO department (name)
VALUES  ("Test Dept One"),
        ("Test Dept Two");

INSERT INTO role (title, salary, department_id)
VALUES  ("InternOne", 40, 1),
        ("InternTwo", 80, 2);

INSERT INTO employee (first_name, last_name, role_id)
VALUES  ("John", "Doe", 1),
        ("Vin", "Diesel", 2);