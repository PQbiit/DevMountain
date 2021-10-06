const axios = require("axios");

module.exports = {
    fetchData: () =>{
        return axios.get('https://jsonplaceholder.typicode.com/posts/1');
    }
}