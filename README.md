# ethereum-lite-explorer-crawling

## Description
This project is an open-source block explorer on EVM chain. If you follow this repository, you can run explorer in localhost. This repository provides crawling code and database set up. This logic accesses the chain RPC URL every 2.5 seconds, receives data and stores it in the database.

## Getting Started
### Setting up Database
**This is done in MySQL Workbench. Proceed with the workbench settings first.**
<br>
Create a database by executing the query statement below before running the crawling server.

```sql
CREATE DATABASE explorer_db;

USE explorer_db;

CREATE TABLE block_data(                                            
  blocknumber INT NOT NULL,
  time_stamp VARCHAR(256) NOT NULL, 
  blockhash VARCHAR(256) NOT NULL, 
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
- Git clone this repo
```bash
git clone https://github.com/Generation-Foundation/ethereum-lite-explorer-crawling.git
```
- Create ``.env`` to update MySQL database settings.
```env
DB_HOST="host"
DB_USER="user"
DB_PASSWORD="password"
DB_DATABASE="explorer_db"
```
- Modify 'baseURL' in ``etherApi.js`` to your blockchain RPC URL
```javascript
const axios = require("axios");

const etherApi = axios.create({
    // change your blockchain RPC URL
    baseURL : "https://eth.public-rpc.com",
    headers : {'content-type' : "application/json"}
})

module.exports = { etherApi } 
```
- Run it local with the following command
```bash
npm install --save
node server.js
```
- Go to the following link to build your backend server
  - <https://github.com/Generation-Foundation/ethereum-lite-explorer-back>

## Contributors
Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://github.com/Booyoun-Kim"><img src="https://avatars.githubusercontent.com/u/34641838?v=4" width="100px;" alt=""/><br /><sub><b>Ben</b></sub></a><br /><a>🧑‍🏫</a> <a>🤔</a> <a>📆</a> <a>💬</a></td>
    <td align="center"><a href="https://github.com/Jaewoneeee"><img src="https://avatars.githubusercontent.com/u/93761302?v=4" width="100px;" alt=""/><br /><sub><b>Danny</b></sub></a><br /><a>💻</a> <a>🤔</a> <a>🔣</a> <a>📖</a> <a>🚧</a></td> 
  </tr>
</table>

## Developed
Developing by [Generation Foundation](https://github.com/Generation-Foundation)
<br>
  
<img width="270" alt="" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e385adbc-8b74-45c6-ab5e-92b1b0510748/Generation_01.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221220T052307Z&X-Amz-Expires=86400&X-Amz-Signature=5b6d663784a1f7362e75ba4bf831fc01e2ce290660ac88a86e04c744ae9dd9a8&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Generation_01.png%22&x-id=GetObject" />

## Our Services and Community
- [Official Website](https://gen.foundation/)
- [Generation Explorer](https://dev-explorer.gen.foundation/)
