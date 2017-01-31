/**
 * Created by simonthome on 22/01/2017.
 */
'use strict';

const express = require('express');
const Promise = require('bluebird');
const jwt = require('jwt-simple');

const Movie = require('../models/movie');
const config = require('../../config/config');

const movieMethods = {
  saveMovie(movie) {
    return new Promise((resolve, reject) => {
      const date = new Date();

      const movieData = {
        movieTitle: movie.movieTitle,
        actors: movie.actors,
        format: movie.format,
        category: movie.category,
        downloadLink: movie.downloadLink,
        subLink: movie.subLink,
        uploader: movie.uploader,
        productionDate: movie.productionDate,
        creationDate: date.getTime()
      };
      console.log(JSON.stringify(movieData));
      const newMovie = new Movie(movieData);
      newMovie.save()
        .then(movieData => resolve(movieData))
        .catch(err => reject(err));
    });
  },
  findOneMovieById(id) {
    return Movie.findOne({_id: id}).exec();
  },
  findAllMovies() {
    return Movie.find({}).exec();
  },
  findMovieByUploader(userId) {
    return Movie.find({uploader: userId}).exec();
  },
  updateMovie(movie) {
    return Movie.update({_id: movie._id}, movie).exec();
  },
  deleteMovie(movie) {
    return Movie.remove({_id: movie._id}).exec();
  },
  findNewMovie() {
    return Movie.find({}).sort({productionDate: -1}).limit(4).exec()
  },
  findMovieByCategory(category) {
    return Movie.find({category}).exec();
  },
  // searchByTitle(searchString) {
  //   console.log(searchString);
  //   return Movie.find({$text:{$search:searchString}}).exec();
  // }
};

module.exports = movieMethods;