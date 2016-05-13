(function() {
  angular
    .module('omdbApp')
    .factory('searchOMDB', searchOMDB)

    searchOMDB.$inject = ['$http'];

    function searchOMDB($http)  {

      var apiBaseUrl = 'http://www.omdbapi.com/?';
      var search = {};
      // api query param for general search
      var general = 's='
      // api query param for specific search
      var title = 't=';


      var configInput = function(input, type) {
        input = input.trim();
        input = input.replace(' ', '+');

        type === 'title' ? input = (title + input) : input = (general + input);

        return input;
      }

      search.titlesLike = function (input, type) {

        input = configInput(input, type);

        return $http.get(apiBaseUrl + input)
                .then(
                  function(success) {
                    return success.data;
                  },
                  function(error) {
                    console.log(error);
                    return 'There was an error making that request.'
                  }
                );
      }

      search.singleTitle = function (input) {

        input = configInput(input, type);

        return $http.get(apiBaseUrl + input)
                .then(
                  function(success) {
                    return success.data;
                  },
                  function(error) {
                    console.log(error);
                    return 'There was an error making that request.'
                  }
                );
      }
      return search;
    }

})();
