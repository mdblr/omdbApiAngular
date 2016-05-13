(function() {
  'use strict';

  angular
    .module('omdbApp', ['ngRoute'])
    .config(config);

  config.$inject = ['$routeProvider', '$locationProvider'];

  function config($routeProvider, $locationProvider) {
    console.log('routes');
    $routeProvider
      .when('/', {
        templateUrl: '/home/home.html',
        controllerAs: 'Home',
        controller: 'Home'
      })
      .when('/search', {
        templateUrl: '/search/results.html',
        controllerAs: 'Results',
        controller: 'Results'
      })
      .when('/movie', {
        templateUrl: '/movie/listing.html',
        controllerAs: 'Listing',
        controller: 'Listing'
      })
      .otherwise({
        redirectTo: "/"
      });

    $locationProvider.html5Mode(true);
  }

})();
