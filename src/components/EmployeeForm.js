import React, { useState } from 'react';
import { createWFHRequest } from '../services/api';  // Import the API method

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    from: '',
    to: '',
    approverId: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the API to submit the WFH request
    createWFHRequest(formData)
      .then(response => {
        setStatus('WFH request submitted successfully');
      })
      .catch(error => {
        setStatus('Error submitting WFH request');
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Submit Work From Home Request</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>From Date/Time:</label>
          <input 
            type="datetime-local" 
            name="from" 
            value={formData.from} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>To Date/Time:</label>
          <input 
            type="datetime-local" 
            name="to" 
            value={formData.to} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Approver ID:</label>
          <input 
            type="text" 
            name="approverId" 
            value={formData.approverId} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {status && <p>{status}</p>}
    </div>
  );
};

export default EmployeeForm;
