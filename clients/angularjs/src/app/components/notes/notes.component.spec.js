import angular from "angular";
import notes from "@components/notes/index";
import * as angularMock from "angular-mocks";
import { notesComponent } from "./notes.component";
import template from "./notes.tmpl.html";
import { notesModel } from "@core/models/notes.model";
import { NotesController } from "./notes.controller";

describe("Notes Component", () => {
  beforeEach(angular.mock.module(notes.name));
  let $rootScope;
  let mockModel;
  let makeController;
  // eslint-disable-next-line no-undef
  beforeEach(inject(_$rootScope_ => {
    $rootScope = _$rootScope_;
    makeController = injectables => {
      return new NotesController(injectables);
    };
  }));

  describe("module", () => {
    it("should have an appropriate name", () => {
      expect(notes.name).toBe("notes");
    });
  });

  describe("component", () => {
    let ddo;
    beforeEach(() => {
      ddo = notesComponent;
    });

    it("should have the right template", () => {
      expect(ddo.template).toEqual(template);
    });

    it("should have the right controller", () => {
      expect(ddo.controller).toEqual(NotesController);
    });

    it("should have an isolate scope", () => {
      expect(ddo.scope).toEqual(expect.any(Object));
    });

    it("should use controllerAs", () => {
      expect(ddo.controllerAs).toEqual(expect.any(String));
    });
  });
});
