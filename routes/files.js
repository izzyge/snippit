const express = require('express');
const auth = require('./helpers/auth');
const Folder = require('../models/folder');
const File = require('../models/file');
const files = require('./files');

const router = express.Router({ mergeParams: true });

router.get('/new', auth.requireLogin, (req, res, next) => {
  Folder.findById(req.params.folderId, function(err, folder) {
    if(err) { console.error(err) };

    res.render('files/new', { folder: folder });
  });
});

router.post('/', auth.requireLogin, (req, res, next) => {
  Folder.findById(req.params.folderId, function(err, folder) {
    if(err) { console.error(err) };

    let file = new File(req.body);
    file.folder = folder;

    file.save(function(err, file) {
      if(err) { console.error(err) };
      return res.redirect(`/folder/${folders._id}`);
    });
  });
});

router.post('/:id', auth.requireLogin, (req, res, next) => {
  File.findById(req.params.id, function(err, file) {
    file.points += parseInt(req.body.points);

    file.save(function(err, file) {
      if(err) { console.error(err) };

      return res.redirect(`/folders/${file.folders}`);
    });
  });
});

router.get('/:id', auth.requireLogin, (req, res, next) => {
  Folder.findById(req.params.id, function(err, folder) {
    if(err) { console.error(err) };

    File.find({ folder: folder }, function(err, posts) {
      if(err) { console.error(err) };

      res.render('folders/show', { folder: folder, files: files });
    });
  });
});

module.exports = router;
