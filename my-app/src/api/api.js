import * as axios from 'axios';


export const usersAPI = () => {
    return axios.get("http://jsonplaceholder.typicode.com/users")
        .then(response => {
            return response.data;
        });
};