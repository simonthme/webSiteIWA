/**
 * Created by simonthome on 21/01/2017.
 */
'use strict';
const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  movieTitle: String,
  actors: [{firstName: String, lastName: String}],
  format: String,
  category: String,
  downloadLink: String,
  subLink: String,
  uploader: String,
  productionDate: Date,
  creationDate: Date,
});

module.exports = mongoose.model('Movie', movieSchema);