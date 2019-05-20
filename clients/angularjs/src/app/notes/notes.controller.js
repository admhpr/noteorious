'use strict';

angular.module('noteorious', ['common'])
    .controller("NotesCtrl", function ($scope, NotesModel) {
        var ctrl = $scope;
        NotesModel.all().then(data => ctrl.boards = data)
    });