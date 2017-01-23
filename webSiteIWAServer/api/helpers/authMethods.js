/**
 * Created by simonthome on 21/01/2017.
 */
'use strict';
const express = require('express');
const Promise = require('bluebird');
const jwt = require('jwt-simple');

const User = require('../models/user');
const config = require('../../config/config');
const bcrypt = require('bcrypt-as-promised');


const authMethods = {
  findOneByUserName(userName) {
    return User.findOne({userName: userName}).exec();
  },
  saveClient(user) {
    return new Promise((resolve, reject) => {
      const date = new Date();

      const userData = {
        firstName: user.firstName,
        lastName: user.lastName,
        userName: user.userName,
        password: user.password,
        creationDate: date.getTime()
      };
      console.log(JSON.stringify(userData));
      const newUser = new User(userData);
      newUser.save()
        .then(userData => resolve(userData))
        .catch(err => reject(err));
    });
  },
  updateUser(id, user) {
    return User.update({_id: id}, user).exec();
  },
  findOneById(id) {
    return User.findOne({_id: id}).exec();
  },
  genSalt(number) {
    return bcrypt.genSalt(number);
  },
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  },
  hashPassword(password) {
    return new Promise((resolve, reject) => {
      this.genSalt(10)
        .then(salt => {
          this.hash(password, salt)
            .then(hash => {
              resolve(hash);
            })
            .catch(err => {
              reject(err);
            });
        })
        .catch(err => {
          reject(err);
        });
    })
  },

};

module.exports = authMethods;
