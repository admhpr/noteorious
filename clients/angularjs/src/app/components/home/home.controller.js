class HomeController {
  constructor(HomeModel) {
    this.HomeModel = HomeModel;
    this.getHome();
    this.search = "";
    this.boards = [];
  }

  getHome() {
    this.HomeModel.get().then(() => {
      this.boards = this.HomeModel.getState();
    });
  }
}

HomeController.$inject = ["HomeModel"];

export { HomeController };
