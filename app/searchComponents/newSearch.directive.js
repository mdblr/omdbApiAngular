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
          <input type='text' ng-model='newSearch' placeholder='e.g., Batman Returns'/>
          <a class='btn btn-default' href=/search/{{feature}}/{{newSearch}}>let's go</a>
        </div>`
      }
    }

})();
