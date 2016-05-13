(function() {

  angular
    .module('omdbApp')
    .controller('Home', Home)

    function Home(searchOMDB) {

      let vm = this;
      searchOMDB.titlesLike('the land before time', 'title').then(function(data) {console.log(data)});
      vm.stuff='home is working';

    }
})();
