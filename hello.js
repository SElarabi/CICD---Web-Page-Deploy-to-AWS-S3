/** @format */

const express = require('express');
const app = express();
const port = 3001;

const hello = () => {
	'HELLO WORLD';
};

exports.hello = hello;
