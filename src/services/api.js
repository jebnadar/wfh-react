import axios from 'axios';

// Set base URL if your backend is hosted on a different domain
axios.defaults.baseURL = 'http://localhost:5000';  // Make sure this matches your backend URL


// 1. Create WFH Request
export const createWFHRequest = (formData) => {
  return axios.post('/wfh/request', formData);
};

// 2. Get all WFH requests (Admin)
export const getWFHRequests = () => {
  return axios.get('/admin/wfh/requests');
};

// 3. Approve WFH Request (Admin)
export const approveRequest = (requestId) => {
  return axios.put(`/admin/wfh/request/${requestId}/approve`);
};

// 4. Reject WFH Request (Admin)
export const rejectRequest = (requestId) => {
  return axios.put(`/admin/wfh/request/${requestId}/reject`);
};

// 5. Get the status of a WFH Request (Optional)
export const getRequestStatus = (requestId) => {
  return axios.get(`/wfh/request/${requestId}/status`);
};
