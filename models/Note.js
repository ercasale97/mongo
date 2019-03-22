var mongoose = require("mongoose");
// Save reference to the Schema constructor
var Schema = mongoose.Schema;

// NoteSchema Object
var NoteSchema = new Schema({
    title: String,
    body: String
});

var Note = mongoose.model("Note", NoteSchema);

module.exports = Note;