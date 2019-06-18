class NotesController {
  constructor(NotesModel) {
    this.NotesModel = NotesModel;
    this.getBoards();
    this.search = "";
    this.notes = [];
  }

  getBoards() {
    this.NotesModel.get().then(() => {
      console.log(this.NotesModel.getState());
      this.notes = this.NotesModel.getState();
    });
  }
}

NotesController.$inject = ["NotesModel"];

export { NotesController };
