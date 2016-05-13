(function() {
  'use strict';

  angular
    .module('omdbApp', ['ngRoute'])
    .config(config);

  config.$inject = ['$routeProvider', '$locationProvider'];

  function config($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/home-feat/home.html',
        controllerAs: 'Home',
        controller: 'Home'
      })
      .when('/search', {
        templateUrl: '/search-feat/results.html',
        controllerAs: 'Results',
        controller: 'Results'
      })
      .when('/movie', {
        templateUrl: '/title-feat/listing.html',
        controllerAs: 'Listing',
        controller: 'Listing'
      })
      .otherwise({
        redirectTo: "/"
      });

    $locationProvider.html5Mode(true);
  }

})();
