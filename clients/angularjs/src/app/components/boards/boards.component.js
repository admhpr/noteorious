import template from "./boards.tmpl.html";
import { BoardsController as controller } from "./boards.controller";

export const boardsComponent = {
  restrict: "E",
  template,
  controller,
  controllerAs: "vm",
  scope: {},
};
