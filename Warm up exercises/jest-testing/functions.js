const axios = require('axios');

module.exports = {
    fetchData: () =>{
        return axios.get('https://jsonplaceholder.typicode.com/posts/1');
    },

    add: (n1,n2) => {
        n1 = parseInt(n1);
        n2 = parseInt(n2);
        return n1+n2;
    },

    subtract: (n1, n2) => {
        n1 = parseInt(n1);
        n2 = parseInt(n2);
        return n1-n2;
    },

    divide: (n1, n2) => {
        n1 = parseInt(n1);
        n2 = parseInt(n2);
        return n1/n2;
    },
    multiply: (n1, n2) => {
        n1 = parseInt(n1);
        n2 = parseInt(n2);
        return n1*n2;
    },
    modulo: (n1, n2) => {
        n1 = parseInt(n1);
        n2 = parseInt(n2);
        return n1%n2;
    }
}