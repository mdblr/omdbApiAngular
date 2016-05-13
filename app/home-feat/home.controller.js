(function() {

  angular
    .module('omdbApp')
    .controller('Home', Home)

    function Home() {

      let vm = this;

      vm.stuff='home is working';
    }
})();
