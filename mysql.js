const mysql = require("mysql2/promise");

const getsutdents = async () => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "q1w2e3r4",
    database: "attendance",
  });

  try {
    const [results, fields] = await connection.query("select * from students");
    console.log(results);
    await connection.end();
  } catch (err) {
    console.log(err);
  }
};
