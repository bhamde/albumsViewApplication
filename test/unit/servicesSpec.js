'use strict';

/* jasmine specs for services go here */

describe('albumApp services', function() {
  // load modules
  beforeEach(module('albumApp'));

  // Test service availability
  it('check the existence of albumList factory', inject(function(albumList) {
      expect(albumList).toBeDefined();
    }));
  it('check the existence of usersList factory', inject(function(usersList) {
      expect(usersList).toBeDefined();
    }));
  it('check the existence of photosList factory', inject(function(photosList) {
      expect(photosList).toBeDefined();
    }));
});
