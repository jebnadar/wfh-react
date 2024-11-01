
import React from 'react';
import './App.css';
import EmployeeForm from './components/EmployeeForm';
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <div className="App">
      <h1>Work From Home Application</h1>
      <EmployeeForm />
      <AdminDashboard />
    </div>
  );
}

export default App;

