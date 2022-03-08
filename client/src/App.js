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
  const [newWage, setNewWage] = useState(0);

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
      setEmployeeList([
        ...employeeList,
        {
          name: name,
          age: age,
          country: country,
          position: position,
          wage: wage,
        },
      ]);
    });
  };

  const getEmployees = () => {
    Axios.get("http://localhost:3001/employees").then((response) => {
      setEmployeeList(response.data);
    });
  };

  const updateWage = (id) => {
    Axios.put("http://localhost:3001/update", {
      wage: newWage,
      employee_id: id,
    }).then((response) => {
      setEmployeeList(
        employeeList.map((value) => {
          return value.employee_id === id
            ? {
                ...value,
                wage: newWage,
              }
            : value;
        })
      );
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

        <div className="list">
          {employeeList.map((employee) => {
            return (
              <div key={employee.employee_id}>
                <div className="employee-list">
                  <div>
                    <p>Name:{employee.name}</p>
                    <p>Age: {employee.age}</p>
                    <p>Position: {employee.position}</p>
                    <p>Country: {employee.country}</p>
                    <p>Wage: {employee.wage}</p>
                  </div>

                  <div className="update">
                    <input
                      onChange={(event) => {
                        setNewWage(event.target.value);
                      }}
                      type="text"
                      placeholder="Update Wage"
                    />
                    <button onClick={() => updateWage(employee.employee_id)}>
                      Update
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
