import { pool } from '../config/database.js';

// create database and tables
export const createSchema = async () => {
  const createQuery = `CREATE DATABASE IF NOT EXISTS ${process.env.MYSQL_DATABASE};`;
  await pool.query(createQuery);

  const useQuery = `USE ${process.env.MYSQL_DATABASE};`;
  await pool.query(useQuery);

  const applicantQuery = `
  CREATE TABLE IF NOT EXISTS message(
    message_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(40) NOT NULL,
    message VARCHAR(200) NOT NULL
  );`;
  await pool.query(applicantQuery);

  return 'DATABASE SCHEMA CREATED';
};
