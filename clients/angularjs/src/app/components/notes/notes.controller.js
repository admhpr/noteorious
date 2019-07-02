class NotesController {
  constructor(NotesModel) {
    this.NotesModel = NotesModel;
    this.getNotes();
    this.search = "";
    this.notes = [];
  }

  getNotes() {
    this.NotesModel.get().then(() => {
      this.notes = this.NotesModel.getState();
    });
  }
}

NotesController.$inject = ["NotesModel"];

export { NotesController };
