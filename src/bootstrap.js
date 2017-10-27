import axios from 'axios';
import lodash from 'lodash';
import moment from 'moment';
import {Cookie} from './lib/Cookie';
window.axios = axios;
window._ = lodash;
window.moment = moment;

window.axios.defaults.headers.common = {'X-Requested-With': 'XMLHttpRequest'};
window.axios.defaults.baseURL = ( process.env.NODE_ENV !== 'production') ? 'http://100.100.7.38:9000/api/' : 'http://158.85.67.166:8028/api/';

window._socket = window.io.connect('http://localhost:5000');

// Global images url
window.IMAGE_PATH = ( process.env.NODE_ENV !== 'production') ? 'http://100.100.7.38:9000' : 'http://158.85.67.166:8028';

// Add a request interceptor
axios.interceptors.request.use( function(config) {
  	// Do something before request is sent
    const token = Cookie.get('token'); 
    if( token ) {
      config.headers = {
        Authorization: `Bearer ${token}`
      }
    }
  	return config;
}, function (error) {
  	// Do something with request error
  	return Promise.reject(error);
})

// Add a response interceptor
axios.interceptors.response.use( function(response) {
  	// Do something with response data
  	return response;
},  function(error) {
	if(!error.response){
		alert('Network Failure! Make sure you have an active internet connection.');
	}
	
  	// Do something with response error
  	return Promise.reject(error);
});
