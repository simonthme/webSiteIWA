/**
 * Created by simonthome on 23/01/2017.
 */
'use strict';

const express = require('express');
const Promise = require('bluebird');
const jwt = require('jwt-simple');

const User = require('../models/user');
const config = require('../../config/config');
const authMethods = require('../helpers/authMethods');
const passport = require('passport');


module.exports = function () {
  const router = express.Router();

  router.get('/', passport.authenticate('jwt', {session: false}), (req, res) => {
    console.log('get user route');
    const userId = req.header.userId;
    authMethods.findOneById(userId)
      .then(user => {
        if (user) {
          res.json({success: true, msg: 'successfully found user', user: user});
        } else {
          res.json({success: false, msg: 'user not found'});
        }
      })
      .catch(err => {
        console.log('error finding user');
        res.json({success: false, msg: 'error finding user'});
      })
  });

  router.patch('/', passport.authenticate('jwt', {session: false}), (req, res) => {
    const userId = req.header.userId;
    authMethods.findOneById(userId)
      .then(user => {
        if (!user) {
          res.json({success: false, msg: 'No user found.'});
        } else {
          user.userName = req.body.userName;
          user.firstName = req.body.firstName;
          user.lastName = req.body.lastName;
          authMethods.updateUser(userId, user)
            .then(updateResp => {
              console.log(updateResp);
              if (updateResp.ok = 1) {
                const token = jwt.encode({userName: user.userName},
                  config.development.jwtSecret);
                res.json({success: true, msg: 'Successful updated user',token: 'JWT ' + token, user: user})
              } else {
                res.json({success: false, msg: 'Email already used.'});
              }
            })
            .catch(err => {
              console.log(err);
              res.json({success: false, msg: 'Error'});
            })

        }
      })
      .catch(err => {
        console.log(err);
        return res.json({success: false});
      })
  });

  router.patch('/password', passport.authenticate('jwt', {session: false}), (req,res) => {
    const userId = req.header.userId;
    authMethods.findOneById(userId)
      .then(user => {
        if (!user) {
          console.log('no user found');
          return res.json({success: false, msg:'No user found.'});
        } else {
          authMethods.hashPassword(req.body.password)
            .then(hash => {
              user.password = hash;
              authMethods.updateUser(userId, user)
                .then(() => {
                  res.json({success: true, msg: 'Updated user successfully', password: hash});
                })
                .catch(err => {
                  console.log(err);
                  res.json({success: false, msg: 'Failed to hash the password'});
                })
            }).catch(err => {
            console.log(err);
            res.json({success: false, msg: 'Failed to hash the password'});
          })
        }
      })
      .catch(err => {
        console.log(err);
        return res.json({success: false});
      })
  });

  router.delete('/', passport.authenticate('jwt', {session: false}), (req, res) => {
    const userId = req.header.userId;
      authMethods.deleteUser(userId)
        .then(response => {
          console.log(response);
          res.json({success: true, msg:'user successfully deleted'});
        })
        .catch(err =>{
          console.log(err);
          res.json({success: false, msg:'error deleting user'});
        })

  });
  return router;
};
