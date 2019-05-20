'use strict';

angular.module('common')
    .service('BoardsModel', function ($http) {
        var service = this;

        function extract(result) {
            return result.data;
        }
        service.all = function () {
            console.log('BOARDS::all')
        };

    });