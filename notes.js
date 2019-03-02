const fs = require("fs");
const chalk = require("chalk");

const getNotes = (note) => {
	return `The note states, ${note}`;
};

const addNote = (title, body) => {
	const notes = loadNotes();
	console.log("notes: ", notes);
	const newNote = { title, body };
	// const duplicates = notes.filter((note) => note.title === title);
	const duplicates = notes.find((note) => note.title === title); //this stops as soon as match is soon; filter goes through whole array
	if (duplicates.length > 0) {
		console.log(chalk.red.inverse("Already added this note"));
	} else {
		notes.unshift({ title, body });
		saveNotes(notes);
		console.log(chalk.green.inverse("Added note"));
	}
};

const saveNotes = (notes) => {
	//stringify data
	const stringData = JSON.stringify(notes);
	fs.writeFileSync("notes.json", stringData);
};

const loadNotes = () => {
	try {
		//read from file
		const buffer = fs.readFileSync("notes.json");
		//parse it
		const json = buffer.toString();
		return JSON.parse(json);
	} catch (e) {
		return [];
	}
};

const removeNote = (noteToDelete) => {
	const notes = loadNotes();
	if (notes.find((note) => note.title === noteToDelete.title)) {
		const newNotes = notes.filter((note) => note.title !== noteToDelete.title);
		saveNotes(newNotes);
		// console.log("Removed ", noteToDelete.title);
		const successMsg = chalk.green.inverse("Note removed");
		console.log(successMsg);
	} else {
		console.log(chalk.inverse.red("Cannot remove; notes does not contain "), noteToDelete.title);
	}
};

const listNotes = () => {
	const notes = loadNotes();
	notes.forEach((note, i) => console.log(chalk.blue.inverse(`Note ${i + 1}: ${note.title}--${note.body}`)));
};

const readNote = (title) => {
	const notes = loadNotes();
	const foundNote = notes.find((note) => note.title === title);
	// console.log("notes, foundNote: ", notes, foundNote);
	if (foundNote) {
		console.log(chalk.inverse.green(`Found: ${foundNote.title}`));
	} else {
		console.log(chalk.inverse.red("Note does not exist"));
	}
};

module.exports = {
	getNotes,
	addNote,
	removeNote,
	listNotes,
	readNote
};
