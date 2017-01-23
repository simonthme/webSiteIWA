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
const movieMethods = require('../helpers/movieMethods');
const passport  = require('passport');



module.exports = function () {
  const router = express.Router();

  router.put('/', passport.authenticate('jwt', {session: false}), (req, res) => {
    req.body.uploader = req.header.userId;
    console.log(req.body);
    if (!req.body.uploader) {
      res.json({success: false, msg: 'missing header id'});
    } else {
      movieMethods.saveMovie(req.body)
        .then(movie => {
          res.json({success: true, msg: 'movie successfully created', movie: movie});
        })
        .catch(err => {
          console.log(err);
          res.json({success: false, msg: 'error creating episode'});
        });
    }
  });

  router.get('/', (req,res) => {
    movieMethods.findAllMovies()
      .then(movies => {
        if (movies.length > 0) {
          res.json({success: true, msg:'successfully found all movies', movies: movies});
        } else {
          res.json({success: false, msg:'no movies were found'});
        }
      })
      .catch(err => {
        console.log(err);
        res.json({success: false, msg:'error getting all movies'});
      });
  });

  router.get('/:id', (req,res) => {
    if (!req.params.id) {
      res.json({success: false, msg:'missing params'});
    } else {
      movieMethods.findOneMovieById(req.params.id)
        .then(movie => {
          if (movie) {
            res.json({success: true, msg:'Successfully found movie', movie: movie});
          } else {
            res.json({success: false, msg:'no movie found'});
          }
        })
        .catch(err => {
          console.log(err);
          res.json({success: false, msg:'error finding movie'});
        });
    }
  });

  router.post('/', passport.authenticate('jwt', {session: false}), (req,res) => {
    const userId = req.header.userId;
    movieMethods.findMovieByUploader(userId)
      .then(movies => {
        if (movies.length > 0) {
          res.json({success: true, msg:'Movies found by uploader', movies: movies});
        } else {
          res.json({success: false, msg:'No movies found'});
        }
      })
      .catch(err => {
        console.log(err);
        res.json({success: false, msg:'error getting movies by uploader'});
      });
  });

  router.patch('/', passport.authenticate('jwt', {session: false}), (req,res) => {
    const userId = req.header.userId;
    movieMethods.updateMovie(req.body)
      .then(updateResp => {
        console.log(updateResp);
        // TODO check if update responde is ok
        res.json({success: true, msg:'successfully updated movie'});
      })
      .catch(err => {
        console.log(err);
        res.json({success: false, msg:'error updating movie'});
      })
  });
  return router;
};
