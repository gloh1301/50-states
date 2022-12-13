import axios from 'axios'

export default {
    getAllStates() {
        return axios.get('/api/states').then( response => {
            return response.data
        })
    },
    setVisited(stateName, visited) {
        // request to /api/states/stateName
        let requestData = {visited: visited}
        return axios.patch('/api/states/' + stateName, requestData).then( response => {
            return response.data
        })
    },
    getOneState(stateName) {
        return axios.get('/api/state/' + stateName).then( response => {
            return response.data
        })
    },
    getVisitedStatus(visitedTrue) {
        return axios.get('/api/states/' + visitedTrue).then( response => {
            return response.data
        })
    }
}