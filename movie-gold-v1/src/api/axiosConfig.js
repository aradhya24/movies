import axios from 'axios';

export default axios.create({
    baseURL:'http://16.171.38.17:8080',
    headers:{"ngrok-skip-browser-warning":"true"}
});
