export default function BoardsCtrl($scope, $log, BoardsModel) {
    var ctrl = $scope;
    $onInit = function () {
        $log.info('Activate Boards Controller')
    }
    BoardsModel.all().then(data => ctrl.boards = data)
}