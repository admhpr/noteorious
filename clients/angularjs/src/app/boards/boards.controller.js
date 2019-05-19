'use strict';

angular.module('noteorious', [])
    .controller("BoardsCtrl", function ($scope) {
        var ctrl = $scope;
        ctrl.boards = [{
            id: '1',
            title: 'Board One',
            description: 'This is board one',
            isActive: 1,
            createdAt: new Date('2019-05-15T02:41:39.111Z'),
            updatedAt: new Date('2019-05-15T02:41:39.111Z'),
        }, {
            id: '2',
            title: 'Board 2',
            description: 'This is board two',
            isActive: 1,
            createdAt: new Date('2019-05-15T02:41:39.111Z'),
            updatedAt: new Date('2019-05-15T02:41:39.111Z'),
        }]

    });