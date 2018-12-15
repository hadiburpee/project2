DROP DATABASE IF EXISTS statetax_db;
CREATE DATABASE statetax_db;

USE DATABASE statetax_db;

CREATE TABLE nexus_rules (
    id INT AUTO INCREMENT NOT NULL,
    state_name VARCHAR(100) NOT NULL,
    transactionTotal INT(11,2),
    dollarAmountTotal DECIMAL(11,2),
    transaction_threshold INT(),
    sales_volume INT(),
    test_boolean BOOLEAN
);

CREATE TABLE user_information (
    id INT AUTO INCREMENT NOT NULL,
    username VARCHAR(100) NOT NULL,
    company_name VARCHAR(100) NULL,
    first_name VARCHAR(100) NULL,
    last_name VARCHAR(100) NULL,
    email VARCHAR(100) NOT NULL,
    transactionTotal INT (11,2),
    dollarAmountTotal DECIMAL(11,2)
)