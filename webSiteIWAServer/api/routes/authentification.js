/**
 * Created by simonthome on 21/01/2017.
 */
'use strict';

const express = require('express');
const Promise = require('bluebird');
const jwt = require('jwt-simple');

const User = require('../models/user');
const config = require('../../config/config');
const authMethods = require('../helpers/authMethods');



module.exports = function () {
  const router = express.Router();

  router.post('/signup', (req, res) => {
    if (!req.body.userName || !req.body.password) {
      console.log('missing password or username');
      res.json({success: false, msg: 'Enter username or password'});
    } else {
      authMethods.saveClient(req.body)
        .then(client => {
          console.log('client created' + JSON.stringify(client));
          res.json(
            {success: true, msg: 'Succesfully created user', userData: client});
        })
        .catch(err => {
          console.log('error creation ' + err);
          res.json(
            {success: false, msg: 'Username already exists', body: req.body});
        });
    }
  });


  router.post('/login', (req, res) => {
    console.log('user email ' + req.body.userName);
    authMethods.findOneByUserName(req.body.userName)
      .then(user => {
        console.log(user);
        if (user) {
          if (user.password === null || user.password === '' ||
            user.password === 'undefined') {
            res.json({success: false, msg: 'Missing password'});
          } else {
            user.comparePassword(req.body.password, (err, isMatch) => {
              if (isMatch && !err) {
                const token = jwt.encode({userName: user.userName},
                  config.development.jwtSecret);
                console.log('Login success');
                res.json({
                  success: true,
                  msg: 'Login successful',
                  token: 'JWT ' + token,
                  userData: user
                });
              } else {
                console.log("wrong password");
                res.json({success: false, msg: 'Wrong password'});
              }
            });
          }
        } else {
          console.log("wrong email");
          res.send({success: false, msg: 'Wrong email'});
        }
      })
      .catch(err => {
        console.log(err);
        res.json({success: false, msg: 'error in findone'});
      });
  });
  return router;
};
