const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FileSchema = new Schema({
  subject: String,
  body: String,
  folder: { type: Schema.Types.ObjectId, ref: 'Folder' },
  // points: { type: Number, default: 0 },
  // comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
});

module.exports = mongoose.model('File', FileSchema);
