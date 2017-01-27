/**
 * Created by simonthome on 16/10/2016.
 */

const router = require('express').Router();
const authRoutes = require('./authentification')(router);
const episodeRoutes = require('./episode')(router);
const movieRoutes = require('./movie')(router);
const tvShowRoutes = require('./tvShow')(router);
const userRoutes = require('./user')(router);
const config = require('../../config/config');
const jwt = require('jwt-simple');
const User = require('../models/user');


module.exports = (function () {
  console.log('in index router');

  router.get('/', (req, res) => {
    res.status(200).json({message: 'Connected!'});
    console.log('connected !! ');
  });

  const getToken = (headers) => {
    console.log(headers);
    if (headers && headers.authorization) {
      const parted = headers.authorization.split(' ');
      if (parted.length === 2) {
        return parted[1];
      } else {
        return null;
      }
    } else {
      return null;
    }
  };

  router.use(function (req, res, next) {
    console.log(req.path);
    if (req.path === '/login' || req.path === '/signup' || (req.path == '/episode' && req.method === 'GET') ||
      (req.path === '/movie' && req.method === 'GET') || (req.path === '/tvshow' && req.method === 'GET')) {
      return next();
    }
    const token = getToken(req.headers);
    console.log(token);
    if (token) {
      const decoded = jwt.decode(token, config.development.jwtSecret);
      console.log('requete de ' + decoded.userName);
      User.findOne({
        userName: decoded.userName
      }, (err, user) => {
        if (err) throw err;
        if (!user) {
          return res.status(403).send({success: false, msg: 'Authentication failed. User not found.'});
        } else {
          req.header.userId = user._id;
          next();
        }
      });
    } else {
      return res.status(403).send({success: false, msg: 'No token provided.'});
    }
  });

  router.use('/', authRoutes);
  router.use('/movie', movieRoutes);
  router.use('/tvshow', tvShowRoutes);
  router.use('/episode', episodeRoutes);
  router.use('/user', userRoutes);
  return router;
})();
