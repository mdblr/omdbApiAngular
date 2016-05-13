(function() {
  angular
    .module('omdbApp')
    .factory('searchOMDB', searchOMDB)

    searchOMDB.$inject = ['$http', 'urlConfig'];

    function searchOMDB($http, urlConfig)  {

      var search = {};

      search.titlesLike = function (input, search, media) {

        let url = urlConfig.config(input, search, media);
        return $http.get(url)
                .then(
                  function(success) {
                    return success.data.Search;
                  },
                  function(error) {
                    console.log(error);
                    return 'There was an error making that request.'
                  }
                );
      }


      search.singleTitle = function (input, type, media) {

        let url = urlConfig.config(input, search, media);

        return $http.get(url)
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
