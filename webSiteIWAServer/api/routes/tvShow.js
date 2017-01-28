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
const passport = require('passport');


module.exports = function () {
  const router = express.Router();

  router.put('/', passport.authenticate('jwt', {session: false}),
    (req, res) => {
      req.body.uploader = req.header.userId;
      console.log(req.body);
      tvShowMethods.saveTvShow(req.body)
        .then(tvShow => {
          res.json({
            success: true,
            msg: 'tv show successfully created',
            tvShow: tvShow
          });
        })
        .catch(err => {
          console.log(err);
          res.json({success: false, msg: 'error creating tv show'});
        });
    });

  router.get('/', (req, res) => {
    tvShowMethods.findAllTvShows()
      .then(tvShows => {
        if (tvShows.length > 0) {
          res.json({
            success: true,
            msg: 'successfully found all tvShows',
            tvShows: tvShows
          });
        } else {
          res.json({success: false, msg: 'no tvShows were found'});
        }
      })
      .catch(err => {
        console.log(err);
        res.json({success: false, msg: 'error getting all tvShows'});
      });
  });

  // router.get('/:id', (req, res) => {
  //   if (!req.params.id) {
  //     res.json({success: false, msg: 'missing params'});
  //   } else {
  //     tvShowMethods.findOneTvShowById(req.params.id)
  //       .then(tvShow => {
  //         if (tvShow) {
  //           res.json({
  //             success: true,
  //             msg: 'Successfully found tv show',
  //             tvShow: tvShow
  //           });
  //         } else {
  //           res.json({success: false, msg: 'no tv show found'});
  //         }
  //       })
  //       .catch(err => {
  //         console.log(err);
  //         res.json({success: false, msg: 'error finding tv show'});
  //       });
  //   }
  // });

  router.post('/', passport.authenticate('jwt', {session: false}),
    (req, res) => {
      const userId = req.header.userId;
      tvShowMethods.findTvShowByUploader(userId)
        .then(tvShows => {
          if (tvShows.length > 0) {
            res.json({
              success: true,
              msg: 'Tv shows found by uploader',
              tvShows: tvShows
            });
          } else {
            res.json({success: false, msg: 'No tv show found'});
          }
        })
        .catch(err => {
          console.log(err);
          res.json({success: false, msg: 'error getting tvShows by uploader'});
        });
    });

  router.patch('/', passport.authenticate('jwt', {session: false}),
    (req, res) => {
      const userId = req.header.userId;
      console.log(req.body.id);
      tvShowMethods.findOneTvShowById(req.body.id)
        .then(tvShow => {
          if (tvShow) {
            tvShow.tvShowTitle = req.body.tvShowTitle;
            tvShow.actors = req.body.actors;
            tvShow.category = req.body.category;
            tvShow.totalSeason = req.body.totalSeason;
            tvShow.productionDate = req.body.productionDate;
            tvShowMethods.updateTvShow(tvShow)
              .then(updateResp => {
                console.log(updateResp);
                // TODO check if update responde is ok
                res.json(
                  {success: true, msg: 'successfully updated tvshow', tvShow});
              })
              .catch(err => {
                console.log(err);
                res.json({success: false, msg: 'error updating tvshow'});
              })
          } else {
            res.json({success: false, msg: 'No tvshow found'});
          }
        })
        .catch(err => {
          console.log(err);
          res.json({success: false, msg: 'Error updating tvshow'})
        });
    });

  router.post('/delete', passport.authenticate('jwt', {session: false}), (req,res) => {
    const userId = req.header.userId;
    tvShowMethods.deleteTvShow(req.body)
      .then(deleted => {
        console.log(deleted);
        res.json({success:true, msg:'TvShow successfully deleted'});
      })
      .catch(err => {
        console.log(err);
        res.json({success: false, msg:'Error deleting tvshow'});
      });
  });

  router.get('/new', (req,res) => {
    tvShowMethods.findNewTvShow()
      .then(tvShows => {
        console.log(tvShows);
        if (tvShows) {
          console.log(tvShows);
          res.json({success: true, msg: 'successfully found new tvshows', newTvShows: tvShows});
        } else {
          res.json({success: false, msg:'no tvshows found'});
        }
      })
      .catch(err => {
        console.log(err);
        res.json({success: false, msg:'error getting new tvshows'});
      })
  });

  router.post('/category', (req, res) => {
    console.log(req.body.category);
    tvShowMethods.findTvShowByCategory(req.body.category)
      .then(tvshows => {
        console.log(tvshows);
        if (tvshows) {
          res.json({success: true, msg: 'Successfully get movie by category', tvShows:tvshows});
        } else {
          res.json({success: false, msg: 'No movies found'});
        }
      })
      .catch(err => {
        console.log(err);
        res.json({success: false, msg: 'Error getting movie by category'});
      })
  });


  return router;
};
