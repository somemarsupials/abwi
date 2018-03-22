let api;

if (window.location.hostname === 'localhost') {
  api = 'http://localhost:5000';
} else {
  api = 'https://http://abwi.herokuapp.com';
};

export default api;

