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
        `<div class='flexEnd'>
          <input type='text' ng-model='newSearch' placeholder='e.g., Batman Returns'/>
          <de-search-options ng-init='feature = "all"' purpose='feature'></de-search-options>
          <div>
            <a class='btn btn-default' href=/search/{{feature}}/{{newSearch}}>let's go</a>
          </div>
        </div>`
      }
    }

})();
