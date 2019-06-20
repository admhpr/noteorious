//TODO: add index for notes
import angular from "angular";
import { notesComponent } from "./notes.component";
import core from "../../core";

export default angular
  .module("notes", [core.name])
  .component("notes", notesComponent);
