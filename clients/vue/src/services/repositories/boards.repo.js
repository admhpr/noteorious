import api from "@services/http/setup";

const resource = "/boards";
export default {
  getBoards() {
    return api.get();
  },
  getBoard(id) {
    return api.get(`${resource}/${id}`);
  },
  createBoard(payload) {
    return api.post(`${resource}`, payload);
  }
};
