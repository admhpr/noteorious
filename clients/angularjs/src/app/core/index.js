// libs
import angular from "angular";
import uiRouter from "angular-ui-router";

// models
import { boardsModel } from "./models/boards.model";
import { notesModel } from "./models/notes.model";

// config
import routerSetup from "./services/routes/router.service";
import { ENDPOINT_URI } from "./config/const";

export default angular
  .module("app.core", [uiRouter])
  .config(routerSetup)
  .constant("ENDPOINT_URI", ENDPOINT_URI)
  .factory("BoardsModel", boardsModel)
  .factory("NotesModel", notesModel);
