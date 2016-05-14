(function() {
  angular
    .module('omdbApp')
    .directive('deSearchOptions', deSearchOptions )

    function deSearchOptions() {
      return {
        restrict: 'E',
        scope: {
          purpose: '='
        },
        template: `
        <select ng-model='purpose'>
          <option value='all'>All</option>
          <option value='movie'>Movie</option>
          <option value='series'>Series</option>
          <option value='episode'>Episode</option>
        </select>
        `
      }
    }
})();
