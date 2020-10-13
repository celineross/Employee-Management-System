USE employee_db;

INSERT INTO department
    (name)
VALUES
    ("Sales"),
    ("Engineering"),
    ("Finance"),
    ("Support");

INSERT INTO role
    (title, salary, department_id)
VALUES
	("Regional Manager", 100000, 1),
    ("Head Accountant", 90000, 3),
    ("Salesman", 40000, 1),
    ("Accountant", 80000, 3),
    ("Customer Service Rep", 35000, 4);

INSERT INTO
    employee (first_name, last_name, role_id, manager_id)
VALUES
	("Michael", "Scott", 1, null),
    ("Angela", "Martin", 2, null),
    ("Oscar", "Martinez", 4, 2),
    ("Kevin", "Malone", 4, 2),
    ("Jim", "Halpert", 3, 1);