class BoardsController {
    constructor(BoardsModel) {
        this.Boards = BoardsModel;
        this.getBoards();
        this.search = '';
    }

    getBoards() {
        this.Boards.get()
            .then(() => {
                this.posts = this.Boards.getState();
            });
    }
}

BoardsController.$inject = ['BoardsModel'];

export {
    BoardsController
};