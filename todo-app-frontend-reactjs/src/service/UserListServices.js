import axios from 'axios'

const USER_API_URL = 'http://localhost:8080/api/user/'

class UserListServices {

    retrieveAllUsers(x) {
        return axios.get(`${USER_API_URL}`);
    }

    deleteUser(id) {
        //console.log('executed service')
        return axios.delete(`${USER_API_URL}${id}`);
    }

    retrieveUser(id) {
        return axios.get(`${USER_API_URL}${id}`); 
    }

    updateUser(id, user) {
        //console.log('executed service')
        return axios.put(`${USER_API_URL}${id}`, user);
    }

    createUser(user) {
        //console.log('executed service')
        return axios.post(`${USER_API_URL}`, user);
    }

    
}

export default new UserListServices()