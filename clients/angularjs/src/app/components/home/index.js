import angular from "angular";
import { homeComponent } from "./home.component";
import core from "../../core";

export default angular
  .module("home", [core.name])
  .component("home", homeComponent);
