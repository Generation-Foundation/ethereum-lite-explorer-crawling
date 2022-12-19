const { db } = require('./db')
const { etherApi } = require('./etherApi')
const { rpcGetLatestData } = require('./rpcGetLatestData')

const rpcCheckBlockNum = () => {
    eth_blockNumber()
}

const eth_blockNumber = async() => {
    const response = await etherApi.post('/', {
        "jsonrpc":"2.0",
        "method":"eth_blockNumber",
        "params":[],
        "id":9
    })
    let latestBlock = response.data.result
    db_checkBlockNum(latestBlock)
}

const db_checkBlockNum = async(latestBlock) => {
    let blockNumber = parseInt(latestBlock, 16)

    const txHashInsert = "SELECT IF(EXISTS(SELECT * from block_data WHERE blocknumber = ?), '1', '0' ) as RESULT";
    db.query(txHashInsert, [blockNumber], (err, result) => {
        let string = JSON.stringify(result)
        let parse = JSON.parse(string)
        let checkBlockNum = parse[0].RESULT

        if(checkBlockNum == '0'){
            rpcGetLatestData(blockNumber)
        } else {
            console.log("block data already existed")
        }
    })
}

module.exports = { rpcCheckBlockNum };