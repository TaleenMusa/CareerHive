
import axios from 'axios';

export default axios.create({
    baseURL:'http://48d4-45-117-5-148.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});