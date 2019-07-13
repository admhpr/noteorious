import angular from "angular";
import core from "@core/index";
import * as angularMock from "angular-mocks";
import { notesModel } from "../notes.model";
import { allNotes } from "../__fixtures__/notes.model.fixture";
const mockHttp = {
  get: jest.fn().mockImplementation(
    url =>
      new Promise(resolve =>
        resolve({
          data: allNotes,
        }),
      ),
  ),
};

describe("Notes Model", function() {
  beforeEach(angular.mock.module(core.name));

  let model;
  // eslint-disable-next-line no-undef
  beforeEach(inject(NotesModel => (model = notesModel(mockHttp, {}, {}))));

  //TODO: async issues
  describe("get", () => {
    it("should set the state to an array of objects", async () => {
      const data = await model.get();
      expect(model.getState()).toEqual(allNotes);
    });
  });

  describe("get one", () => {
    it("should get one note by id", async () => {
      const data = await model.get();
      expect(model.getOne({ id: 3 })).resolves.toEqual(
        allNotes[allNotes.length - 1],
      );
    });
  });
  describe("create", () => {});
});
