const fs = require("fs");

const book = {
	title: "Ego is the Enemy",
	author: "Ryan Holiday"
};

const bookJSON = JSON.stringify(book);
// console.log("json book: ", bookJSON);
// const parsedData = JSON.parse(bookJSON);
// console.log("parsed: ", parsedData);

//create JSON file with bookJSON:
// fs.writeFileSync("1-json.json", bookJSON);

//read json file, store text returned in variable:
// const dataBuffer = fs.readFileSync("1-json.json"); //this returns as buffer (binary form of the data)
// const stringData = dataBuffer.toString();
// const parsedBuffer = JSON.parse(stringData);
// // console.log("buffer: ", dataBuffer);
// console.log("string: ", stringData);
// console.log("parsed title: ", parsedBuffer.title);

//CHALLENGE:

const data = JSON.parse(fs.readFileSync("1-json.json").toString());
data.name = "Patrick";
data.age = 25;
const newData = JSON.stringify(data);
fs.writeFileSync("1-json.json", newData);
