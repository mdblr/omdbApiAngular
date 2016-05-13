(function() {

  angular
    .module('omdbApp')
    .controller('Listing', Listing)

    function Listing() {

      let vm = this;
      vm.stuff='listing is working';

    }
})();
