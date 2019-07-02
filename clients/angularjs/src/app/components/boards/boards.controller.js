class BoardsController {
  constructor(BoardsModel) {
    this.BoardsModel = BoardsModel;
    this.getBoards();
    this.search = "";
    this.boards = [];
  }

  getBoards() {
    this.BoardsModel.get().then(() => {
      this.boards = this.BoardsModel.getState();
    });
  }
}

BoardsController.$inject = ["BoardsModel"];

export { BoardsController };
