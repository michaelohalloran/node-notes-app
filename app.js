const fs = require("fs");
const notes = require("./notes");
const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");

yargs.version("1.1.0");
//ADD NOTE:

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
	handler(val) {
		// console.log('Adding new note', val.title);
		// console.log('Add body text: ', val.body);
		notes.addNote(val.title, val.body);
	}
});

// REMOVE
yargs.command({
	command: "remove",
	describe: "Remove a note",
	builder: {
		title: {
			describe: "note to remove",
			demandOption: true,
			type: "string"
		}
	},
	handler(note) {
		notes.removeNote(note);
	}
});

//LIST
yargs.command({
	command: "list",
	describe: "List notes",
	handler() {
		notes.listNotes();
	}
});

// READ
yargs.command({
	command: "read",
	describe: "Read notes",
	builder: {
		title: {
			describe: "title to read",
			demandOption: true,
			type: "string"
		}
	},
	handler(value) {
		// console.log("Reading note: ", value.title);
		notes.readNote(value.title);
	}
});

yargs.parse();
// console.log('yargs: ', yargs.argv);
