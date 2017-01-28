/**
 * Created by simonthome on 22/01/2017.
 */
'use strict';
const mongoose = require('mongoose');

const tvShowSchema = new mongoose.Schema({
  tvShowTitle: String,
  actors: [String],
  category: String,
  totalSeason: Number,
  uploader: String,
  productionDate: Date,
  creationDate: Date,
});

module.exports = mongoose.model('TvShow', tvShowSchema);