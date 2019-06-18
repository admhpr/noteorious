class NotesController {
  constructor(NotesModel) {
    this.NotesModel = NotesModel;
    this.getBoards();
    this.search = "";
    this.boards = [];
  }

  getBoards() {
    this.NotesModel.get().then(() => {
      console.log(this.NotesModel.getState());
      this.boards = this.NotesModel.getState();
    });
  }
}

NotesController.$inject = ["NotesModel"];

export { NotesController };
