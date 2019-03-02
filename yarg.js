const fs = require("fs");
const getNotes = require("./notes");
const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");

// fs.writeFileSync('notes.txt', 'Hi, my name is Bob');
// fs.appendFileSync('notes.txt', 'Appending this additional text');

// console.log(getNotes('This is a sample note'));

// *****************************************************
//VALIDATOR
// *****************************************************

const realEmail = "mike@example.com";
const wrongEmail = "example.com";
const trueUrl = "www.google.com";
const falseUrl = "ww:google.com";

// console.log(`Validation: ${realEmail} is a ${validator.isEmail(realEmail)} email`);
// console.log(`Validation: ${wrongEmail} is a ${validator.isEmail(wrongEmail)} email`);
// console.log(`Validation: ${trueUrl} is a ${validator.isURL(trueUrl)} URL`);
// console.log(`Validation: ${falseUrl} is a ${validator.isURL(falseUrl)} URL`);

// *****************************************************
//CHALK
// *****************************************************
const str = "Success";
const greenStr = chalk.green(str);
const boldStr = chalk.bold(str);
const inverted = chalk.inverse(str);
const mix = chalk.underline.bold.bgMagenta.italic.greenBright(str);

// console.log(`${greenStr} is printed in green`);
// console.log(`Now ${boldStr} is bold`);
// console.log(`Now ${inverted} is reversed`);
// console.log(`${mix} is underlined, bold, italicized, with a background`);

// ***************************************
//YARGS
// ***************************************

// console.log(`str is ${str} and argv: ${process.argv}`);
// console.log(process.argv);

// const commandObj = (command, describe, handler) => {
// 	return {
// 		command,
// 		describe,
// 		handler
// 	};
// };

// yargs.command(
// 	commandObj('add', 'add new note', function() {
// 		console.log('Adding...');
// 	})
// );

// yargs.command(
// 	commandObj('rmove', 'remove note', function() {
// 		console.log('Removing...');
// 	})
// );

// yargs.command(
// 	commandObj('list', 'List new note', function() {
// 		console.log('Listing...');
// 	})
// );

// yargs.command(
// 	commandObj('read', 'read note', function() {
// 		console.log('Reading...');
// 	})
// );

yargs.command({
	command: "add",
	describe: "Add new note",
	builder: {
		body: {
			describe: "Body",
			demandOption: true,
			type: "string"
		},
		title: {
			describe: "Title",
			demandOption: true,
			type: "string"
		}
	},
	handler: function(val) {
		console.log("Adding new note", val.title);
		console.log("Add body text: ", val.body);
	}
});

// REMOVE
yargs.command({
	command: "remove",
	describe: "Remove a note",
	handler: function() {
		console.log("Removing a note");
	}
});

//LIST
yargs.command({
	command: "list",
	describe: "List notes",
	handler: function() {
		console.log("Listing note");
	}
});

// READ
yargs.command({
	command: "read",
	describe: "Read notes",
	handler: function() {
		console.log("Reading note");
	}
});

yargs.parse();
// console.log('yargs: ', yargs.argv);
