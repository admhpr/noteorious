//TODO: add index for notes
import angular from "angular";
import { notesComponent } from "./notes.component";
import core from "../../core";
import uiRouter from "angular-ui-router";

export default angular
  .module("notes", [core.name, uiRouter])
  .config(function($stateProvider) {
    $stateProvider.state("notes", {
      url: "/notes",
      template: "<notes></notes>",
    });
  })
  .component("notes", notesComponent);
