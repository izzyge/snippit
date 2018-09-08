const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FileSchema = new Schema({
  title: String,
  body: String,
  folder: { type: Schema.Types.ObjectId, ref: 'Folder' },
});

module.exports = mongoose.model('File', FileSchema);
