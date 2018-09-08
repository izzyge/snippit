const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FolderSchema = new Schema({
  title: { type: String, required: true },
  users: [{ type: Schema.Types.ObjectId, ref: 'User'}],
});

module.exports = mongoose.model('folder', FolderSchema);
