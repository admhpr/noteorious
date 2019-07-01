import angular from "angular";
import boards from "@components/boards/index";
import * as angularMock from "angular-mocks";
import { BoardsController } from "./boards.controller";
describe("BoardsController", () => {
  beforeEach(angular.mock.module(boards.name));
  let $rootScope;
  let makeController;

  beforeEach(window.module(boards.name));
  // eslint-disable-next-line no-undef
  beforeEach(inject(_$rootScope_ => {
    $rootScope = _$rootScope_;
    makeController = injectables => {
      return new BoardsController(injectables);
    };
  }));
});
