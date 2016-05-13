(function() {

  angular
    .module('omdbApp')
    .controller('Results', Results)

    function Results() {

      let vm = this;
      vm.stuff='results is working';

    }
})();
