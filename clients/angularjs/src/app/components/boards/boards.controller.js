class BoardsController {
    constructor(BoardsModel) {
        this.Boards = BoardsModel;
        this.getBoards();
        this.search = '';
    }

    getBoards() {
        this.Boards.get()
            .then(() => {
                this.boards = this.Boards.getState();
            });
    }
}

BoardsController.$inject = ['BoardsModel'];

export {
    BoardsController
};