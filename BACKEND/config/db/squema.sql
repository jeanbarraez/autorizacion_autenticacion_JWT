CREATE DATABASE softjobs; 
\c softjobs;
CREATE TABLE usuarios
 ( id SERIAL PRIMARY KEY, email VARCHAR(50) NOT NULL, 
 password VARCHAR(100) NOT NULL, 
 rol VARCHAR(25), lenguage VARCHAR(20) );
SELECT * FROM usuarios;


INSERT INTO usuarios (email, password, rol, lenguage) VALUES('desafio6@gmail.com', '123456', 'Backend Developer', 'JavaScript')

DELETE * FROM usuarios WHERE id = 4;