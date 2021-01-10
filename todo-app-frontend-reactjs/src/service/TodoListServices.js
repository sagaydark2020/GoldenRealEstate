import axios from 'axios'

const TODO_API_URL = 'http://localhost:8080'

class CourseDataService {

    retrieveAllTodos(name) {
        return axios.get(`${TODO_API_URL}/api/todo`);
    }
}

export default new CourseDataService()