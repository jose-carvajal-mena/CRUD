CREATE DATABASE crud;
USE crud;

CREATE TABLE usuarios(
    id INT(10)  UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(20) NOT NULL,
    apellido VARCHAR(20) NOT NULL,
    direccion VARCHAR(50) NOT NULL,
    telefono VARCHAR(10)

);