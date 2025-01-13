const axios = require('axios');

const url = 'https://api.energidataservice.dk/dataset/RegulatingBalancePowerdata?limit=5';

axios.get(url)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
