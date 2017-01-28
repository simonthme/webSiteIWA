/**
 * Created by simonthome on 22/01/2017.
 */
'use strict';

const express = require('express');
const Promise = require('bluebird');
const jwt = require('jwt-simple');

const TvShow = require('../models/tvShow');
const config = require('../../config/config');

const tvShowMethods = {
  saveTvShow(tvShow) {
    return new Promise((resolve, reject) => {
      const date = new Date();

      const tvShowData = {
        tvShowTitle: tvShow.tvshowTitle,
        actors: tvShow.actors,
        category: tvShow.category,
        totalSeason: tvShow.totalSeason,
        uploader: tvShow.uploader,
        productionDate: tvShow.productionDate,
        creationDate: date.getTime()
      };
      console.log('INmethod : ');
      console.log(JSON.stringify(tvShowData));
      const newTvShow = new TvShow(tvShowData);
      newTvShow.save()
        .then(tvShowData => resolve(tvShowData))
        .catch(err => reject(err));
    });
  },
  findTvShowByUploader(id) {
    return TvShow.find({uploader: id}).exec();
  },
  findOneTvShowById(id) {
    return TvShow.findOne({_id: id}).exec();
  },
  findAllTvShows() {
    return TvShow.find({}).exec();
  },
  updateTvShow(tvShow) {
    return TvShow.update({_id: tvShow._id}, tvShow).exec();
  },
  deleteTvShow(tvShow) {
    return TvShow.remove({_id: tvShow._id}).exec();
  },
  findNewTvShow() {
    return TvShow.find({}).sort({productionDate: -1}).limit(5).exec()
  },
  findTvShowByCategory(category) {
    return TvShow.find({category}).exec();
  },
};

module.exports = tvShowMethods;