import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

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

        <button className="info-btn btn">Add Employee</button>
      </div>
    </div>
  );
}

export default App;
