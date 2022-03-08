import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);
  const [employeeList, setEmployeeList] = useState([]);

  //import axios library
  //sending post request to /create to backend with frontend data
  const addEmployee = () => {
    Axios.post("http://localhost:3001/create", {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage,
    }).then(() => {
      console.log("success");
    });
  };

  const getEmployees = () => {
    Axios.get("http://localhost:3001/employees").then((response) => {
      setEmployeeList(response.data);
    });
  };

  return (
    <div className="App">
      <div className="information">
        <label htmlFor="Name">Name</label>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <label htmlFor="Age">Age</label>
        <input
          type="number"
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />

        <label htmlFor="Position">Position</label>
        <input
          type="text"
          onChange={(e) => {
            setPosition(e.target.value);
          }}
        />

        <label htmlFor="Country">Country</label>
        <input
          type="text"
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        />

        <label htmlFor="Wage">Wage</label>
        <input
          type="number"
          onChange={(e) => {
            setWage(e.target.value);
          }}
        />

        <button onClick={addEmployee} className="info-btn btn">
          Add Employee
        </button>

        <button onClick={getEmployees} className="btn">
          Show Employees
        </button>

        {employeeList.map((employee) => {
          return <p key={employee.id}>{employee.name}</p>;
        })}
      </div>
    </div>
  );
}

export default App;
