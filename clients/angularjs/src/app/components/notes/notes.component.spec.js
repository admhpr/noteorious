import angular from "angular";
import notes from "@components/notes/index";
import * as angularMock from "angular-mocks";
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
});
