import axios from 'axios';

export default axios.create({
    baseURL: 'https://care-for-you-v1.000webhostapp.com/api/auth/'
});