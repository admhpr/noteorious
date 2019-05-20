'use strict';

angular.module('noteorious', ['common'])
    .controller("BoardsCtrl", function ($scope, BoardsModel) {
        var ctrl = $scope;
        BoardsModel.all().then(data => ctrl.boards = data)
    });