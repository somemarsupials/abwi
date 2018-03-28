let baseUrl;

if (window.location.hostname === 'localhost') {
  baseUrl = 'http://localhost:5000';
} else {
  baseUrl = 'https://http://abwi.herokuapp.com';
};

export default baseUrl;

