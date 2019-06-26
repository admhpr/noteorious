import angular from "angular";
import core from "../../../core";
import * as angularMock from "angular-mocks";
import { NotesModel } from "../notes.model";

describe("Notes Model", function() {
  beforeEach(angular.mock.module(core.name));

  var notesModel;
  // eslint-disable-next-line no-undef
  beforeEach(inject(NotesModel => (notesModel = NotesModel)));

  it("run the test", function() {
    expect(1 + 1).toEqual(2);
  });

  describe("get", function() {
    it("should set the state to an array of objects", function() {
      let result = notesModel.getState();
      console.log(result);
    });
  });
});
