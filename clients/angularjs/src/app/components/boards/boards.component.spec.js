import angular from "angular";
import boards from "@components/boards/index";
import * as angularMock from "angular-mocks";
import { boardsComponent } from "./boards.component";
import template from "./boards.tmpl.html";
import { BoardsModel } from "@core/models/boards.model";
import { BoardsController } from "./boards.controller";

jest.mock("@core/models/boards.model");

describe("BoardsController", () => {
  beforeEach(angular.mock.module(boards.name));
  let $rootScope;
  let makeController;

  beforeAll(() => {
    console.log(BoardsModel);
  });

  beforeEach(window.module(boards.name));
  // eslint-disable-next-line no-undef
  beforeEach(inject(_$rootScope_ => {
    $rootScope = _$rootScope_;
    makeController = injectables => {
      return new BoardsController(injectables);
    };
  }));

  describe("module", () => {
    it("should have an appropriate name", () => {
      expect(boards.name).toBe("boards");
    });
  });

  describe("component", () => {
    let ddo;
    beforeEach(() => {
      ddo = boardsComponent;
    });

    it("should have the right template", () => {
      expect(ddo.template).toEqual(template);
    });

    it("should have the right controller", () => {
      expect(ddo.controller).toEqual(BoardsController);
    });

    it("should have an isolate scope", () => {
      expect(ddo.scope).toEqual(expect.any(Object));
    });

    it("should use controllerAs", () => {
      expect(ddo.controllerAs).toEqual(expect.any(String));
    });
  });

  describe("controller", () => {
    it("should have boards", () => {
      const controller = makeController();
      expect(controller.boards).any(Array);
    });
  });
});
