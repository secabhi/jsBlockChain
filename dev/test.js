const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

//bitcoin.createNewBlock(2389,'ADQWE','ADQWR');
//bitcoin.createNewBlock(111,'ADQW','DQWR');
bitcoin.createNewBlock(239,'AQWE','AQWR');
bitcoin.createNewTransaction(200,'Abhi1234','Ravi1234');
bitcoin.createNewBlock(240,'AQWF','AQWS');

console.log(bitcoin);