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
    ("Head Accountant", 90000, 1)
    ("Salesman", 40000, 2),
    ("Accountant", 80000, 3);
    ("Customer Service Rep", 35000, 4)

INSERT INTO
    employee (first_name, last_name, role_id, manager_id)
VALUES
    ("Angela", "Martin", 3, 1),
    ("Oscar", "Martinez", 3, null),
    ("Kevin", "Malone", 3, null);