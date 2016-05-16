(function() {
  angular
    .module('omdbApp')
    .factory('urlConfig', urlConfig)

    function urlConfig() {

      var url = {};
      var all, title, media

      url.base = 'http://www.omdbapi.com/?';

      // api query param for general search
      all = 's='
      title = 't='
      media = '&type='

      url.config = function(input, search, mediaType) {

        input = input.trim()
        input = input.replace(' ', '+')

        search === 'title' ? input = (title + input) : input = (all + input)

        if (mediaType === 'movie') {
          input = input + media.concat('movie')
        }
        else if (mediaType === 'episode') {
          input = input + media.concat('episode')
        }
        else if (mediaType === 'series') {
          input = input + media.concat('series')
        }

        return url.ready = url.base.concat(input)
      }

      return url
    }
})();
