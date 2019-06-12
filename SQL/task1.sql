create database if not exists staff;
use staff;
create table if not exists employees(
id int unsigned not null auto_increment primary key,
first_name varchar(30) not null,
last_name varchar(30) not null,
salary int unsigned not null
);
insert into employees (id, first_name, last_name, salary) value (null, 'Ivan', 'Ivanov', 10000);
insert into employees (id, first_name, last_name, salary) value (null, 'Petr', 'Petrov', 20000);
insert into employees (id, first_name, last_name, salary) value (null, 'Nikolay', 'Vnukov', 30000);
insert into employees (id, first_name, last_name, salary) value (null, 'Alexandr', 'Brovin', 40000);
insert into employees (id, first_name, last_name, salary) value (null, 'Dmitriy', 'Jukov', 15000);
create table if not exists positions(
id int unsigned not null auto_increment primary key,
position_name varchar(30) not null
);
insert into positions (id, position_name) value (null, 'driver');
insert into positions (id, position_name) value (null, 'programmer');
insert into positions (id, position_name) value (null, 'teamlider');
alter table employees add position_id integer not null;
update employees set position_id = 1 where id in (1,5);
update employees set position_id = 2 where id in (2,3);
update employees set position_id = 3 where id=4;

select emp.first_name, emp.last_name, emp.salary, pos.position_name
from employees emp
inner join positions pos on emp.position_id = pos.id where emp.salary < 30000;
select emp.first_name, emp.last_name, emp.salary, pos.position_name
from employees emp
inner join positions pos on emp.position_id = pos.id where emp.salary < 30000 and pos.position_name = "programmer";

create table relationship (
chief_id int not null,
subordinate_id int not null,
primary key (chief_id, subordinate_id)
);
insert into relationship (chief_id, subordinate_id) values
(4, 3),
(4, 5),
(2, 1)
;

select rel.chief_id, rel.subordinate_id, emp.first_name, emp.last_name
from employees emp
inner join relationship rel on emp.id = rel.subordinate_id where rel.chief_id = 4;