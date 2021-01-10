import axios from 'axios'

const TODO_API_URL = 'http://localhost:8080'

class CourseDataService {

    retrieveAllTodos(x) {
        return axios.get(`${TODO_API_URL}/api/todo`);
    }

    deleteTodo(id) {
        //console.log('executed service')
        return axios.delete(`${TODO_API_URL}/api/todo/${id}`);
    }
}

export default new CourseDataService()