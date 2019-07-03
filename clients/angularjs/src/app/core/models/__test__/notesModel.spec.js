import angular from "angular";
import core from "@core/index";
import * as angularMock from "angular-mocks";
import { NotesModel } from "../notes.model";

describe("Notes Model", function() {
  beforeEach(angular.mock.module(core.name));

  var notesModel;
  // eslint-disable-next-line no-undef
  beforeEach(inject(NotesModel => (notesModel = NotesModel)));

  describe("get", function() {
    it("should set the state to an array of objects", async function() {
      notesModel.get().then(() => {
        expect(notesModel.getState().length).toBeGreaterThan(1);
      });
    });
  });

  describe("getOne", function() {});
});
