(function() {
  angular
    .module('omdbApp', [
      'ngRoute',

    ])
    .config(config);

    config.$inject = ['$routeProvider', '$locationProvider'];

    function config($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl:,
          controllerAs:,
          controller:
        })
        .when('/search', {
          templateUrl:,
          controllerAs:,
          controller:
        })
        .when('/:movieTitle', {
          templateUrl:,
          controllerAs:,
          controller:
        })
        .otherwise({
          redirectTo: '/'
        });
      $locationProvider.html5Mode(true); 
    }
})();
