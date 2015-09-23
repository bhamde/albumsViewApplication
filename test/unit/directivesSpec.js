'use strict';

/* jasmine specs for directives go here */

describe('albumApp directives', function() {
  var $compile,
      $rootScope,
      $httpBackend,
      element;

  // load modules
  beforeEach(module('albumApp'));
  beforeEach(angular.mock.module('ngMockE2E'));

  beforeEach(inject(function(_$compile_, _$rootScope_, $injector){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $httpBackend = $injector.get('$httpBackend');
            $httpBackend.whenGET('album-thumbnails.html').passThrough();
  }));

  beforeEach(function() {
    element = $compile("<album-thumbnails></album-thumbnails>")($rootScope);
    angular.element(document.body).append(element);
    //$rootScope.$apply();
  });

  /*it('test', function () {
    expect(element.html()).toBe('asdf');
  });*/

});
