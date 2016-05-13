(function() {

  angular
    .module('omdbApp')
    .controller('Search', Search)

    Search.$inject=['searchOMDB','$routeParams'];

    function Search(searchOMDB, $routeParams) {

      let vm = this;
      let userInput = $routeParams.movieString;
      let media = $routeParams.media;

      vm.films, vm.error;

      searchOMDB.titlesLike(userInput, 'search', media)
      .then(function(omdb) {
        console.log(`results: ${(omdb.data.Search)}`);
        vm.films = omdb.data.Search;
      })
      .catch(function(error) {
        vm.error = "Something wen't wrong! Sorry. "
      });
    }
})();
