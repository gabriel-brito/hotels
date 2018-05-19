'use strict';

const hotelsAPI = () => 
  fetch('https://rif2ibxnjk.execute-api.sa-east-1.amazonaws.com/prod/hotels')
    .then(data => data.json())

export {
  hotelsAPI
}