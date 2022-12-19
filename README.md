# Explorer-Crawling-test


## Description
cawling server code

## Getting Started
### Database
Create a database by executing the query statement below before running the crawl server. The work is done in **MySQL Workbench**.
```sql
CREATE DATABASE explorer_db;

CREATE TABLE block_data(                                            
  blocknumber INT NOT NULL,
  time_stamp VARCHAR(256) NOT NULL, 
  miner VARCHAR(256) NOT NULL, 
  transaction_length VARCHAR(256) NOT NULL, 
  primary key (blocknumber),
  constraint uq_multicolumn unique (blocknumber, time_stamp)
);

CREATE TABLE transaction_data(                               
  blockNumber INT NOT NULL,
  blockNumberHex VARCHAR(256) NOT NULL,
  txHash VARCHAR(256) NOT NULL,
  time_stamp VARCHAR(256) NOT NULL, 
  fromAddress VARCHAR(256) NOT NULL,
  toAddress VARCHAR(256) NOT NULL,
  value VARCHAR(256) NOT NULL,
  constraint uq_txHash unique (txHash)
);

CREATE TABLE contract_data(                                            
  blocknumber INT NOT NULL,
  contractAddress VARCHAR(256) NOT NULL, 
  primary key (blocknumber),
  constraint uq_multicolumn unique (blocknumber, contractAddress)
);
```

### Installing
- Modify ``.env`` to update MySQL database settings.
```env
DB_HOST="host"
DB_USER="user"
DB_PASSWORD="password"
DB_DATABASE="explorer_db"
```
- Modify app/explorerconfig.json to your blockchain RPC URL
```javascript
const axios = require("axios");

const etherApi = axios.create({
    // change your blockchain RPC URL
    baseURL : "https://eth.public-rpc.com",
    headers : {'content-type' : "application/json"}
})

module.exports = { etherApi } 
```
