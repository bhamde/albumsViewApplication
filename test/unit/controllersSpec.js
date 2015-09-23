'use strict';

/* jasmine specs for controllers go here */

describe('albumApp controllers', function() {

  beforeEach(module('albumApp'));
  beforeEach(module('albumAppServices'));

  describe('AlbumListCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('http://jsonplaceholder.typicode.com/albums').
          respond([{id: 1, title: 'First album', userId: 2}, {id: 2, title: 'Second album', userId: 5}]);
      $httpBackend.expectGET('http://jsonplaceholder.typicode.com/users').
          respond([{id: 1, name: 'Kate Morgan'}, {id: 2, name: 'Hanna Stephan'}, {id: 5, name: 'Michael Cook'}]);

      scope = $rootScope.$new();
      ctrl = $controller('AlbumListCtrl', {$scope: scope});
    }));


    it('should have a list of albums to be shown', function() {
      expect(scope.albums.length).toBe(0);
      $httpBackend.flush();

      expect(scope.albums.length).toBe(2);
      expect(scope.albums[0].title).toEqual('First album');
      expect(scope.albums[1].userId).toEqual(5);
    });

    it('on startup should load the users', function() {
      expect(scope.usernameList.length).toBe(0);
      $httpBackend.flush();

      expect(scope.usernameList.length).toBe(6);
      expect(scope.usernameList[1]).toEqual('Kate Morgan');
      expect(scope.usernameList[5]).toEqual('Michael Cook');
    });

    it('should retrieve relevant photos when getPhotoListForAlbum() is called', function() {
      $httpBackend.expectGET('http://jsonplaceholder.typicode.com/photos?albumId=2').
          respond([{id: 1, url: '/Kate/Morgan'}, {id: 2, url: '/test/url'}, {id: 5, url: '/my/url'}]);

      scope.getPhotoListForAlbum(2);
      $httpBackend.flush();

      expect(scope.showAlbum.length).toBe(3);
      expect(scope.showAlbum[0].url).toEqual('/Kate/Morgan');
      expect(scope.showAlbum[2].url).toEqual('/my/url');
    });

  });

});
