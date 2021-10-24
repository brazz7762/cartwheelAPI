var express = require('express');
var mysql = require('mysql');


var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'certifiedbro'
})

connection.connect((err) => {
  if(err) {
    console.log('Error establishing connection aBROham Lincoln, do not pass go:', err)
  } else {
    console.log(`Successfully Established Connection, great job Broseph Stalin, don't forget to feed the peasants..`)
  }
})

module.exports.connection = connection;