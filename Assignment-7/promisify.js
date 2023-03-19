// Node.js program to illustrate util.promisify() method

// Import Utilities module
const util = require('util')

// Import File System module
const fs = require('fs')

// Use promisify to convert callback based method fs.readdir to promise based method
const readdir = util.promisify(fs.readdir)

readdir(process.cwd())
.then(files => {
	console.log(files)
})
.catch(err => {
	console.log(err)
})
