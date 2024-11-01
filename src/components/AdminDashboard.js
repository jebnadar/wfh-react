import React, { useEffect, useState } from 'react';
import { getWFHRequests, approveRequest, rejectRequest } from '../services/api';  // Import the API methods

const AdminDashboard = () => {
  const [requests, setRequests] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch WFH requests when the component loads
    getWFHRequests()
      .then(response => {
        setRequests(response.data);
      })
      .catch(error => {
        setError('Error fetching WFH requests');
        console.error(error);
      });
  }, []);

  const handleApprove = (requestId) => {
    approveRequest(requestId)
      .then(response => {
        alert('Request Approved');
        setRequests(requests.map(req => 
          req.requestId === requestId ? { ...req, status: 'Approved' } : req
        ));
      })
      .catch(error => {
        alert('Error approving request');
        console.error(error);
      });
  };

  const handleReject = (requestId) => {
    rejectRequest(requestId)
      .then(response => {
        alert('Request Rejected');
        setRequests(requests.map(req => 
          req.requestId === requestId ? { ...req, status: 'Rejected' } : req
        ));
      })
      .catch(error => {
        alert('Error rejecting request');
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      {error && <p>{error}</p>}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>From</th>
            <th>To</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map(request => (
            <tr key={request.requestId}>
              <td>{request.name}</td>
              <td>{request.from}</td>
              <td>{request.to}</td>
              <td>{request.status}</td>
              <td>
                {request.status === 'New' && (
                  <>
                    <button onClick={() => handleApprove(request.requestId)}>Approve</button>
                    <button onClick={() => handleReject(request.requestId)}>Reject</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
