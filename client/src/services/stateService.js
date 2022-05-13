import axios from 'axios'

export default { // Make requests to states api for data
    getAllStates() {
        return axios.get(`/api/states`).then( response => {
            return response.data  // gets all state data
        })
    },
    setVisited(stateName, visited) {
        return axios.patch(`/api/state/${stateName}`, {visited: visited} ).then(response => {
            return response.data // gets data on if a state is visited or not
        })
    },
    getOneState(stateName) {
        return axios.get(`/api/state/${stateName}`).then( response => {
            return response.data  // gets data on one state
        })
    }
}