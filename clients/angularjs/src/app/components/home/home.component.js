import template from "./home.tmpl.html";
import { HomeController as controller } from "./home.controller";

export const homeComponent = {
  restrict: "E",
  template,
  controller,
  controllerAs: "vm",
  scope: {},
};
