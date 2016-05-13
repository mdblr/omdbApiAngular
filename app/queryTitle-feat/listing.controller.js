(function() {

  angular
    .module('omdbApp')
    .controller('Listing', Listing)

    Listing.$inject = ['searchOMDB', '$routeParams'];
    function Listing(searchOMDB, $routeParams) {

      let userInput = $routeParams.title;
      let vm = this;
      vm.film;
      vm.error;

      searchOMDB.singleTitle(userInput, 'title')
      .then(function(film) {
        vm.film = film;
      })
      .catch(function(error) {
        vm.error = "Something wen't wrong! Sorry"
      })

    }
})();
