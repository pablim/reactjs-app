import axios from "axios";

export const getApiUrl = () => {
    if (process.env.REACT_APP_ENVIRONMENT === "development") {
        return "http://127.0.0.1:5000"
        //return "http://makeup-api.herokuapp.com"
    } else if (process.env.REACT_APP_ENVIRONMENT === "staging") {
        return "http://stagingurl"
    } else if (process.env.REACT_APP_ENVIRONMENT === "production") {
        return "http://productionurl"
    }
}

const headers = {
    headers: {
        'content-type': 'text/json',
        "Access-Control-Allow-Origin": "*",
    }
}

export const makeRequest = {

    get: async (endpoint, params) => {
        debugger
        const url = getApiUrl() + endpoint
        return await axios.get(url, { params }, headers)
            .then(function (response) {
                // handle success
                console.log(response);
                return response
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    },
    post: async (endpoint, params) => {
        const url = getApiUrl() + endpoint
        return await axios.post(
            url, 
            params, 
            headers
        )
            .then(function (response) {
                // handle success
                console.log(response);
                return response
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
}

export const apiUrl = () => {
    const apiUrl = 'localhost'

    return apiUrl
}