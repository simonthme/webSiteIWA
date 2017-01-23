/**
 * Created by simonthome on 22/01/2017.
 */
'use strict';

const express = require('express');
const Promise = require('bluebird');
const jwt = require('jwt-simple');

const User = require('../models/user');
const config = require('../../config/config');
const authMethods = require('../helpers/authMethods');
const tvShowMethods = require('../helpers/tvShowMethods');
const passport  = require('passport');



module.exports = function () {
  const router = express.Router();

  router.put('/', passport.authenticate('jwt', {session: false}), (req, res) => {
    req.body.uploader = req.header.userId;
    console.log(req.body);
    tvShowMethods.saveTvShow(req.body)
      .then(tvShow => {
        res.json({success: true, msg:'tv show successfully created', tvShow: tvShow});
      })
      .catch(err => {
        console.log(err);
        res.json({success: false, msg:'error creating tv show'});
      });
  });

  router.get('/', (req,res) => {
    tvShowMethods.findAllTvShows()
      .then(tvShows => {
        if (tvShows.length > 0) {
          res.json({success: true, msg:'successfully found all tvShows', tvShows: tvShows});
        } else {
          res.json({success: false, msg:'no tvShows were found'});
        }
      })
      .catch(err => {
        console.log(err);
        res.json({success: false, msg:'error getting all tvShows'});
      });
  });

  router.get('/:id', (req,res) => {
    if (!req.params.id) {
      res.json({success: false, msg:'missing params'});
    } else {
      tvShowMethods.findOneTvShowById(req.params.id)
        .then(tvShow => {
          if (tvShow) {
            res.json({success: true, msg:'Successfully found tv show', tvShow: tvShow});
          } else {
            res.json({success: false, msg:'no tv show found'});
          }
        })
        .catch(err => {
          console.log(err);
          res.json({success: false, msg:'error finding tv show'});
        });
    }
  });

  router.post('/', passport.authenticate('jwt', {session: false}), (req,res) => {
    const userId = req.header.userId;
    tvShowMethods.findTvShowByUploader(userId)
      .then(tvShows => {
        if (tvShows.length > 0) {
          res.json({success: true, msg:'Tv shows found by uploader', tvShows: tvShows});
        } else {
          res.json({success: false, msg:'No tv show found'});
        }
      })
      .catch(err => {
        console.log(err);
        res.json({success: false, msg:'error getting tvShows by uploader'});
      });
  });

  router.patch('/', passport.authenticate('jwt', {session: false}), (req,res) => {
    const userId = req.header.userId;
    tvShowMethods.updateTvShow(req.body)
      .then(updateResp => {
        console.log(updateResp);
        // TODO check if update responde is ok
        res.json({success: true, msg:'successfully updated tvShow'});
      })
      .catch(err => {
        console.log(err);
        res.json({success: false, msg:'error updating tvShow'});
      });
  });
  return router;
};
