(function() {
  angular
    .module('omdbApp')
    .directive('deNewSearch', deNewSearch)

    function deNewSearch() {
      return {
        restrict: 'E',
        scope: {
          feature: '='
        },
        template:
        `<div>
          <p>Start a new search</p>
          <input type='text' ng-model='newSearch' />
          <a class='btn btn-default' href=/search/{{feature}}/{{newSearch}}>Submit</a>
        </div>`
      }
    }

})();
