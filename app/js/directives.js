'use strict';

/* Directives */

var albumAppDirectives = angular.module('albumAppDirectives', []);

albumAppDirectives.directive('albumThumbnails', function() {
  return {
    restrict: 'E',
    templateUrl: 'album-thumbnails.html',
    scope: {
      album: '='
    }
  };
});