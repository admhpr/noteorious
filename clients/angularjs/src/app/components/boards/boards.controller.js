class BoardsController {
    constructor(Boards) {
        this.Boards = Boards;
        this.getPosts();

        this.search = '';
    }

    getBoards() {
        this.Boards.get()
            .then(() => {
                this.posts = this.Boards.getState();
            });
    }
}

BoardsController.$inject = ['Boards'];

export {
    BoardsController
};