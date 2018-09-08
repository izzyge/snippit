const express = require('express');
const auth = require('./helpers/auth');
const Folder = require('../models/folder');
const File = require('../models/file');
const files = require('./files');

const router = express.Router();

// Folders index
router.get('/', (req, res) => {
  Folder.find({}, 'topic', (err, folders) => {
    if (err) {
      console.error(err);
    } else {
      res.render('folders/index', { folders: folders });
    }
  });
});

// Folders new
router.get('/new', auth.requireLogin, (req, res) => {
  res.render('folders/new');
});

router.get('/:id', auth.requireLogin, (req, res, next) => {
  Folder.findById(req.params.id, function(err, folder) {
    if(err) { console.error(err) };

    // File.find({ folder: folder }).sort({ points: -1 }).populate('comments').exec(function (err, file) {
    //   if (err) { console.error(err) };
    //
    //   res.render('folders/show', { folder: folder, files: files, folderId: req.params.id });
    // });
  });
});

// Folders edit
router.get('/:id/edit', auth.requireLogin, (req, res) => {
  Folder.findById(req.params.id, (err, folder) => {
    if (err) { console.error(err); }

    res.render('folders/edit', { folder });
  });
});

// Folders update
router.post('/:id', auth.requireLogin, (req, res) => {
  Folder.findByIdAndUpdate(req.params.id, req.body, (err, folder) => {
    if (err) { console.error(err); }

    res.redirect('/folders/' + req.params.id);
  });
});

// Folders create
router.post('/', auth.requireLogin, (req, res) => {
  let folder = new Folder(req.body);

  folder.save((err, folder) => {
    if (err) { console.error(err); }

    return res.redirect('/folders');
  });
});

router.use('/:folderId/files', files);

module.exports = router;
