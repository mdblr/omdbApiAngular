(function() {

  angular
    .module('omdbApp')
    .controller('Search', Search)

    Search.$inject=['searchOMDB','$routeParams'];

    function Search(searchOMDB, $routeParams) {

      let vm = this;
      let userInput = $routeParams.movieString;
      vm.films;
      vm.error;

      searchOMDB.titlesLike(userInput, 'search')
      .then(function(omdb) {
        vm.films = omdb.data.Search;
      })
      .catch(function(error) {
        vm.error = "Something wen't wrong! Sorry. "
      });
    }
})();
