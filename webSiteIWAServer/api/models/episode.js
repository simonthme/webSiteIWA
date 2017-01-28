/**
 * Created by simonthome on 22/01/2017.
 */
'use strict';
const mongoose = require('mongoose');

const episodeSchema = new mongoose.Schema({
  episodeTitle: String,
  format: String,
  season: String,
  downloadLink: String,
  subLink: String,
  uploader: String,
  creationDate: Date,
});

module.exports = mongoose.model('Episode', episodeSchema);