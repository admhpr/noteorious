import angular from "angular";
import "../../assets/style.css";
import { appDirective } from "./app.directive";
import boards from "./app/components/boards";
import uiRouter from "angular-ui-router";
import core from "./app/core";

angular
  .module("app", [uiRouter, core.name, boards.name])
  .config(function($stateProvider) {
    $stateProvider.state("home", {
      url: "/",
      template: "<home></home>",
    });
    $stateProvider.state("boards", {
      url: "/boards",
      template: "<boards></boards>",
    });
    $stateProvider.state("notes", {
      url: "/notes",
      template: "<notes></notes>",
    });
  })
  .directive("app", appDirective);
