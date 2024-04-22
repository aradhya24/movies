import axios from 'axios';

export default axios.create({
    baseURL:'http://13.50.93.72:8080',
    headers:{"ngrok-skip-browser-warning":"true"}
});
