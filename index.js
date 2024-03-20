const teapot_infrastructure_manager = require('teapot-infrastructure-manager');
const teapot_infrastructure_antihack = require('teapot-infrastructure-antihack');
const nodemon = require('nodemon');
const mysql = require('mysql');
const socket.io = require('socket.io');
const request = require('request');
const bcrypt = require('bcrypt');
const cors = require('cors');
const pg = require('pg');
const mongoose = require('mongoose');
const solc = require('solc');
const cheerio = require('cheerio');
const supertest = require('supertest');
const commander = require('commander');
const sequelize = require('sequelize');
const moment = require('moment');

const os = require('os');
console.log(`Your platform is ${os.platform()}`);

const crypto = require('crypto');
const decipher = crypto.createDecipher('aes192', 'password');
let decrypted = decipher.update('5d41402abc4b2a76b9719d911017c592', 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log('Decrypted text:', decrypted);

const querystring = require('querystring');
const qs = querystring.parse('name=Node.js&company=NodeSource');
console.log(qs);

// Get the Ethereum protocol version
web3.eth.getProtocolVersion().then(version => {
  console.log('Protocol version:', version);
}).catch(err => {
  console.error('Error getting protocol version:', err);
});

const fs = require('fs');
const readableStream = fs.createReadStream('input.txt');
const writableStream = fs.createWriteStream('output.txt');
readableStream.pipe(writableStream);
console.log('File copied using streams');

const util = require('util');
const setTimeoutPromise = util.promisify(setTimeout);
const delay = async () => {
  console.log('Start delay');
  await setTimeoutPromise(1000);
  console.log('End delay');
};
delay();

const { Writable } = require('stream');
const outStream = new Writable({
  write(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  }
});
process.stdin.pipe(outStream);

const dns = require('dns');
dns.lookupService('127.0.0.1', 22, (err, hostname, service) => {
  console.log('Hostname:', hostname);
  console.log('Service:', service);
});

// Call a view or pure function on a smart contract using Hardhat
async function callContractFunction() {
  const contractAddress = '0xcontractAddress';
  const YourContract = await ethers.getContractFactory('YourContract');
  const contract = await YourContract.attach(contractAddress);

  const result = await contract.someViewFunction();
  console.log('View function result:', result);
}

callContractFunction().catch(err => {
  console.error('Error calling contract function:', err);
});