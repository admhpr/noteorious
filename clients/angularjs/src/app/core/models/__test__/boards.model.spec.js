import angular from "angular";
import core from "@core/index";
import * as angularMock from "angular-mocks";
import { BoardsModel } from "../boards.model";

describe("Notes Model", function() {
  beforeEach(angular.mock.module(core.name));

  var boardsModel;
  // eslint-disable-next-line no-undef
  beforeEach(inject(BoardsModel => (boardsModel = BoardsModel)));

  describe("get", function() {
    it("should set the state to an array of objects", async function() {
      boardsModel.get().then(() => {
        expect(boardsModel.getState().length).toBeGreaterThan(1);
      });
    });
  });

  describe("getOne", function() {});
});
