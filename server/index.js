const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const { request, response } = require("express");

//prevents CORS error when making api requests
app.use(cors());

//have to parse json data
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "employee_System",
});

app.post("/create", (request, response) => {
  console.log(request.body);
  const name = request.body.name;
  const age = request.body.age;
  const position = request.body.position;
  const country = request.body.country;
  const wage = request.body.wage;

  db.query(
    "INSERT INTO employees (name, age, position, country, wage) VALUES (?,?,?,?,?)",
    [name, age, position, country, wage],
    (error, result) => {
      if (error) {
        console.log(error);
      } else {
        response.send("Values Inserted");
      }
    }
  );
});

app.get("/employees", (request, response) => {
  db.query("SELECT * FROM employees", (error, result) => {
    if (error) {
      console.log(error);
    } else {
      response.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("great success");
});
