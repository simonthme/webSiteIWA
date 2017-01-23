/**
 * Created by simonthome on 22/01/2017.
 */
'use strict';

const express = require('express');
const Promise = require('bluebird');
const jwt = require('jwt-simple');

const Episode = require('../models/episode');
const config = require('../../config/config');

const episodeMethods = {
  saveEpisode(episode) {
    return new Promise((resolve, reject) => {
      const date = new Date();

      const episodeData = {
        episodeTitle: episode.episodeTitle,
        format: episode.format,
        downloadLink: episode.downloadLink,
        subLink: episode.subLink,
        uploader: episode.uploader,
        creationDate: date.getTime()
      };
      console.log(JSON.stringify(episodeData));
      const newEpisode = new Episode(episodeData);
      newEpisode.save()
        .then(episodeData => resolve(episodeData))
        .catch(err => reject(err));
    });
  },
  findOneEpisodeById(id) {
    return Episode.findOne({_id: id}).exec();
  },
  findAllEpisodes() {
    return Episode.find({}).exec();
  },
  findEpisodeByUploader(userId) {
    return Episode.find({uploader: userId}).exec();
  },
  updateEpisode(episode) {
    return Episode.update({_id: episode.id}, episode).exec();
  }
};

module.exports = episodeMethods;