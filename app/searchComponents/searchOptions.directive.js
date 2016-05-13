(function() {
  angular
    .module('omdbApp')
    .directive('deSearchOptions', deSearchOptions )

    function deSearchOptions() {
      return {
        restrict: 'E',
        scope: {
          feature: '=feat'
        },
        template: `
        <select ng-model='feature.media'>
          <option value='all'>All</option>
          <option value='movie'>Movie</option>
          <option value='series'>Series</option>
          <option value='episode'>Episode</option>
        </select>
        `
      }
    }
})();
