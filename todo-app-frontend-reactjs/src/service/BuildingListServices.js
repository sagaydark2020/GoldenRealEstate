import axios from 'axios'

const BUILDINGS_API_URL = 'http://localhost:8080/api/buildings/'

class BuildingListServices {

    retrieveAllBuildings(x) {
        return axios.get(`${BUILDINGS_API_URL}`);
    }

    deleteBuilding(id) {
        //console.log('executed service')
        return axios.delete(`${BUILDINGS_API_URL}${id}`);
    }

    retrieveBuilding(id) {
        return axios.get(`${BUILDINGS_API_URL}${id}`); 
    }

    updateBuilding(id, buildings) {
        //console.log('executed service')
        return axios.put(`${BUILDINGS_API_URL}${id}`, buildings);
    }

    createBuilding(buildings) {
        //console.log('executed service')
        return axios.post(`${BUILDINGS_API_URL}`, buildings);
    }

    
}

export default new BuildingListServices()