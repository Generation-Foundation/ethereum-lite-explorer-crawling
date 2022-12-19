const axios = require("axios");

const etherApi = axios.create({
    baseURL : "https://eth.public-rpc.com",
    //baseURL : "https://testnet-rpc-seoul.gen.foundation",
    headers : {'content-type' : "application/json"}
})

module.exports = { etherApi } 