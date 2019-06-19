import template from "./notes.tmpl.html";
import { NotesController as controller } from "./notes.controller";

export const notesComponent = {
  restrict: "E",
  template,
  controller,
  controllerAs: "vm",
  scope: {},
};
