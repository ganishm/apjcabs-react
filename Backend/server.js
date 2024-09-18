// Node.js server (e.g., app.js)
import express from "express";
import mysql from "mysql";
import cors from "cors"; // Enable CORS for cross-origin requests
const app = express();

app.use(cors()); // Add CORS middleware

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "apj_cabs",
});

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL Connected...");
});

// Example route to get data
app.get("/api/cars", (req, res) => {
  const sql = "SELECT * FROM options";
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result); // Send the result as JSON
  });
});

app.get("/api/cars_retrive", (req, res) => {
  const service = req.query.service; // Get the 'make' parameter from the query string
  const sql = "SELECT * FROM options WHERE options_name = ?";
  db.query(sql, [service], (err, result) => {
    if (err) throw err;
    //res.json(result[0].option_id); // Send the result as JSON

    const optionId = result[0].option_id;
    const sql_new = "SELECT * FROM cars WHERE options_id = ?";
    db.query(sql_new, [optionId], (err_new, result_new) => {
      if (err_new) throw err_new;
      res.json(result_new); // Send the result as JSON
    });
  });
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
