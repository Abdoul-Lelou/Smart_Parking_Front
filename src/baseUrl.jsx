// // import axios from "axios"; 
// import {axios} from "axios";

// const endPoint = axios.create({
//   baseURL : 'http://127.0.0.1:8000/api/',
//   headers: {
// //  Authorization: `<Your Auth Token>`,
//     ContentType:"application/json",
//     timeout : 1000,
//   }, 
//   // .. other options
// });

// export default endPoint;

import axios from 'axios';


export default axios.create({
  baseURL: `http://127.0.0.1:8000/api/`
});