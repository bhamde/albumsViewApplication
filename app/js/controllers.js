'use strict';

/* Controllers */

var albumAppControllers = angular.module('albumAppControllers', []);

albumAppControllers.controller('AlbumListCtrl', ['$scope', 'albumList', 'usersList', 'photosList',
  function($scope, albumList, usersList, photosList) {
    $scope.albums = albumList.query();
    $scope.usernameList = [];
    $scope.showAlbum = {};

    //to query the whole users list only once and save the result in a list
    var getUsernameList = function() {
      usersList.query().$promise.then(function(allUsers) {
        for(var i=0; i<allUsers.length; i++) {
          var user = allUsers[i];
          $scope.usernameList[user.id] = user.name;
        }
      });
    }
    getUsernameList();

    //change the object 'showAlbum' that is bound with the directive to contain the correct list of photos
    //using http://jsonplaceholder.typicode.com/photos?albumId=<value>
    $scope.getPhotoListForAlbum = function(albumID) {
      $scope.showAlbum = photosList.query({albumId:albumID});
      return;
    }

  }]);