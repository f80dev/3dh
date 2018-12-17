import axios from 'axios';
let baseURL;
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:5000/';
}
else {
    baseURL = 'https://ss.shifumix.com:5000/';
}
console.log("root_api" + baseURL);
export const HTTP = axios.create({
    baseURL: baseURL
});
export const ROOT_API = baseURL;
//# sourceMappingURL=http-constants.js.map