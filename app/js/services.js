'use strict';

/* Services */

var albumAppServices = angular.module('albumAppServices', ['ngResource']);

albumAppServices.factory('albumList', ['$resource',
  function($resource) {
    return $resource('http://jsonplaceholder.typicode.com/albums/:albumId');
  }]);

albumAppServices.factory('usersList', ['$resource',
  function($resource) {
    return $resource('http://jsonplaceholder.typicode.com/users/:userId');
  }]);

albumAppServices.factory('photosList', ['$resource',
  function($resource) {
    return $resource('http://jsonplaceholder.typicode.com/photos', {albumId:'@id'});
  }]);