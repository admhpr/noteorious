class NotesController {
  constructor(NotesModel) {
    this.NotesModel = NotesModel;
    this.getNotes();
    this.search = "";
    this.notes = [];
  }

  getNotes() {
    this.NotesModel.get().then(() => {
      console.log(this.NotesModel.getState());
      this.notes = this.NotesModel.getState();
    });
  }
}

NotesController.$inject = ["NotesModel"];

export { NotesController };
