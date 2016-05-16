(function() {

  angular
    .module('omdbApp')
    .controller('Search', Search)

    Search.$inject=['searchOMDB','$routeParams'];

    function Search(searchOMDB, $routeParams) {

      var vm = this;
      let userInput = $routeParams.movieString;
      let media = $routeParams.media;
      vm.typeOfResult = {movies: [] , episodes: [], series: []};

      vm.films, vm.error;
      vm.filter = 'all';

      searchOMDB.titlesLike(userInput, 'search', media)
      .then(function(data) {
        !data ? vm.nope = "Sorry, we don't know that one" : vm.films = data ;
        for (var i = 0; i < 10; i ++) {
          vm.films[i].metaFilter = 'all';
          if (vm.films[i].Type === 'movie') {
            vm.typeOfResult.movies.push(vm.films[i])
          }
          else if (vm.films[i].Type === 'episode') {
            vm.typeOfResult.episode.push(vm.films[i])
          }
          else if (vm.films[i].Type === 'series') {
            vm.typeOfResult.series.push(vm.films[i])
          }
        }
      })
      .catch(function(error) {
        vm.error = "Something wen't wrong! Sorry. "
      });
    }
})();
