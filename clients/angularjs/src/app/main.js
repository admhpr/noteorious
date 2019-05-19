'use strict';

var noteorious = angular.module('noteorious', [])

noteorious.controller('MainCtrl', function MainCtrl($scope) {
    var main = $scope;
    main.boards = [{
            id: '1',
            title: 'Board One',
            description: 'This is board one',
            isActive: 1,
            createdAt: new Date('2019-05-15T02:41:39.111Z'),
            updatedAt: new Date('2019-05-15T02:41:39.111Z'),
        },
        {
            id: '2',
            title: 'Board Two',
            description: 'This is board two',
            isActive: 1,
            createdAt: new Date('2019-05-15T02:41:39.111Z'),
            updatedAt: new Date('2019-05-15T02:41:39.111Z'),
        }
    ]
})