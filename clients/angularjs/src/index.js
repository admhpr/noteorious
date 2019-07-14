import angular from "angular";
import uiRouter from "angular-ui-router";
import "@assets/style.css";
import { appDirective } from "./app.directive";

// components
import boards from "@components/boards";
import notes from "@components/notes";
import core from "@core/index";

function requireAll(context) {
  context.keys().forEach(context);
}

// Collect all angular modules
requireAll(require.context("./scripts", true));

angular
  .module("app", [uiRouter, core.name, boards.name, notes.name])
  .config(function($stateProvider) {
    $stateProvider.state("home", {
      url: "/",
      template: "<home></home>",
    });
    $stateProvider.state("boards", {
      url: "/boards",
      template: "<boards></boards>",
    });
  })
  .directive("app", appDirective);
