'use strict';

angular.module('common')
    .service('NotesModel', function ($http, ENDPOINT_URI) {
        var service = this;

        function extract(result) {
            return result.data;
        }

        function getUrl() {
            return ENDPOINT_URI + '/notes';
        }
        service.all = function () {
            return $http.get(getUrl()).then(extract);
        };

    });