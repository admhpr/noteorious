export default function BoardsCtrl($scope, BoardsModel) {
    var ctrl = $scope;

    console.log(BoardsModel)
    BoardsModel.all().then(data => ctrl.boards = data)
}