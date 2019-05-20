'use strict';

angular.module('noteorious', ['common'])
    .controller("BoardsCtrl", function ($scope, BoardsModel) {
        var ctrl = $scope;
        ctrl.boards = BoardsModel.all()
    });