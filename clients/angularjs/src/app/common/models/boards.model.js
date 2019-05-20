'use strict';

angular.module('common')
    .service('BoardsModel', function ($http, ENDPOINT_URI) {
        var service = this;

        function extract(result) {
            return result.data;
        }

        function getUrl() {
            return ENDPOINT_URI + '/boards';
        }
        service.all = function () {
            return $http.get(getUrl()).then(extract);
        };

    });