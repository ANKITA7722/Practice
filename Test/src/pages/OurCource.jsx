
import React, { useState } from 'react';
import axios from 'axios';

const Ourcourse = () => {
  const [employee, setEmployee] = useState({
    empno: '',
    name: '',
    city: '',
    salary: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/employees', employee);
      alert('Employee record added successfully!');
      setEmployee({
        empno: '',
        name: '',
        city: '',
        salary: ''
      });
    } catch (error) {
      console.error('There was an error adding the employee!', error);
    }
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Empno:</label>
          <input
            type="text"
            name="empno"
            value={employee.empno} 
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={employee.name} 
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={employee.city} 
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Salary:</label>
          <input
            type="number"
            name="salary"
            value={employee.salary} 
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Ourcourse;
