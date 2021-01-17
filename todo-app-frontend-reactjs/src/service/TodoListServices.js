import axios from 'axios'

const TODO_API_URL = 'http://localhost:8080'

class TodoListServices {

    retrieveAllTodos(x) {
        return axios.get(`${TODO_API_URL}/api/todo`);
    }

    filterByCriteria(todo) {
        return axios.post(`${TODO_API_URL}/api/todoByFilter`,todo);
    }

    deleteTodo(id) {
        //console.log('executed service')
        return axios.delete(`${TODO_API_URL}/api/todo/${id}`);
    }

    retrieveTodo(id) {
        return axios.get(`${TODO_API_URL}/api/todo/${id}`); 
    }

    updateTodo(id, todo) {
        //console.log('executed service')
        return axios.put(`${TODO_API_URL}/api/todo/${id}`, todo);
    }

    createTodo(todo) {
        //console.log('executed service')
        return axios.post(`${TODO_API_URL}/api/todo/`, todo);
    }

    
}

export default new TodoListServices()