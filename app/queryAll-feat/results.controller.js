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
      .then(function(data) {
        !data ? vm.nope = "Sorry, we don't know that one" : vm.films = data;
      })
      .catch(function(error) {
        vm.error = "Something wen't wrong! Sorry. "
      });
    }
})();
