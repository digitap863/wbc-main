import axios from './axios';

export function postForm(route, data) {
    return axios.post(route, data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('loggedIn')}`,
      },
      withCredentials: true,
    })
      .catch(error => {
        if (error.response && error.response.status === 400) {
          // Handle the 400 error here
          // You can access the error response data to get the error message
          console.log(error.response.data.message);
  
          // Clear local storage
          localStorage.removeItem('loggedIn');
  
          // Redirect to the login page
          window.location.href = '/login';
        }
        // Throw the error again to propagate it to the caller
        throw error;
      });
  }

  export function getdata(route) {
    return axios.get(route, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('loggedIn')}`,
      },
      withCredentials: true,
    })
      .catch(error => {
        if (error.response && error.response.status === 400) {
          // Handle the 400 error here
          // You can access the error response data to get the error message
          console.log(error.response.data.message);
  
          // Clear local storage
          localStorage.removeItem('loggedIn');
  
          // Redirect to the login page
          window.location.href = '/login';
        }
        // Throw the error again to propagate it to the caller
        throw error;
      });
  }