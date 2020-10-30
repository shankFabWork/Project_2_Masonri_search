import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{Authorization: 'Client-ID fNS7oF8w70JdTWaNR-e-kcpmJRmS4rC1uYsEYm5ZPXU'}
})

