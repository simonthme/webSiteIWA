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
const episodeMethods = require('../helpers/episodeMethods');
const passport  = require('passport');



module.exports = function () {
  const router = express.Router();

  router.put('/', passport.authenticate('jwt', {session: false}), (req, res) => {
    req.body.uploader = req.header.userId;
    console.log(req.body);
    epiodeMethods.saveEpisode(req.body)
      .then(episode => {
        res.json({success: true, msg:'episode successfully created', episode: episode});
      })
      .catch(err => {
        console.log(err);
        res.json({success: false, msg:'error creating episode'});
      });
  });

  router.get('/', (req,res) => {
    episodeMethods.findAllEpisodes()
      .then(episodes => {
        if (episodes.length > 0) {
          res.json({success: true, msg:'successfully found all episodes', epidodes: episodes});
        } else {
          res.json({success: false, msg:'no episodes were found'});
        }
      })
      .catch(err => {
        console.log(err);
        res.json({success: false, msg:'error getting all episodes'});
      });
  });

  router.get('/:id', (req,res) => {
    if (!req.params.id) {
      res.json({success: false, msg:'missing params'});
    } else {
      episodeMethods.findOneEpisodeById(req.params.id)
        .then(episode => {
          if (episode) {
            res.json({success: true, msg:'Successfully found episode', episode: episode});
          } else {
            res.json({success: false, msg:'no episode found'});
          }
        })
        .catch(err => {
          console.log(err);
          res.json({success: false, msg:'error finding episode'});
        })
    }
  });

  router.post('/', passport.authenticate('jwt', {session: false}), (req,res) => {
    const userId = req.header.userId;
    episodeMethods.findEpisodeByUploader(userId)
      .then(episodes => {
        if (episodes.length > 0) {
          res.json({success: true, msg:'Episodes found by uploader', episodes: episodes});
        } else {
          res.json({success: false, msg:'No episodes found'});
        }
      })
      .catch(err => {
        console.log(err);
        res.json({success: false, msg:'error getting episodes by uploader'});
      });
  });

  router.patch('/', passport.authenticate('jwt', {session: false}), (req,res) => {
    const userId = req.header.userId;
    episodeMethods.updateEpisode(req.body)
      .then(updateResp => {
        console.log(updateResp);
        // TODO check if update responde is ok
        res.json({success: true, msg:'successfully updated episode'});
      })
      .catch(err => {
        console.log(err);
        res.json({success: false, msg:'error updating episode'});
      })
  });
  return router;

};
