import { pool } from '../config/database.js';
import dotenv from 'dotenv';
dotenv.config();

export const insertIntoTable = async (tableName, attributes, values) => {
  console.log(attributes);
  console.log(values);

  const valueString = values
    ?.map((val) => {
      if (val === null) return 'null';
      if (!val.trim()) return '';
      if (!isNaN(val)) return val;
      return `"${val}"`;
    })
    .filter((val) => val !== '')
    .join(', ');

  const useQuery = `USE ${process.env.MYSQL_DATABASE};`;
  const query = `
INSERT INTO ${tableName} (${[...attributes]})
VALUES (${valueString});
    `;

  console.log(query);
  await pool.query(useQuery);
  await pool.query(query);
};
