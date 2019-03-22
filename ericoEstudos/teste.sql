show databases;
describe usuarios;
use testandomy;

create table usuaros(
    nome varchar(50),
    email varchar(60),
    idade int
);

insert into usuarios(nome, email, idade) values(
    "Isadora Rocha",
    "dora@msql.com",
    21
);

select * from usuarios;

select * from usuarios where idade = 21;

select * from usuarios where idade >= 22;


Delete from usuarios where nome = "isadora Rocha";

update usuarios set nome = "Tathiana Soares" where nome = "Tathi Soares";