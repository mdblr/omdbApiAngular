(function() {
  angular
    .module('omdbApp')
    .directive('deNewSearch', deNewSearch)

    function deNewSearch() {
      return {
        restrict: 'E',
        scope: {
          feature: '=feat'
        },
        template:
        `<div>
          <p>Start a new search</p>
          <input type='text' ng-model='feature.newSearch' />
          <a href=/search/{{feature.newSearch}}>Submit</a>
        </div>`
      }
    }

})();
