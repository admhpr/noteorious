import { repoAccessor } from "@services";
import { GET_BOARDS, CREATE_BOARD } from "./action.types";
import { IS_LOADING, SET_BOARDS, ADD_BOARD } from "./mutation.types";

const repo = repoAccessor.get("boards");
const state = {
  boards: [],
  isLoading: true
};

const getters = {
  boards(state) {
    return state.boards;
  },
  isLoading(state) {
    return state.isLoading;
  }
};

const actions = {
  [GET_BOARDS]({ commit }) {
    commit(IS_LOADING);
    return repo
      .getBoards()
      .then(({ data }) => {
        commit(SET_BOARDS, data);
      })
      .catch(error => {
        throw new Error(error);
      });
  },
  [CREATE_BOARD]({ commit }, query) {
    commit(IS_LOADING);
    return repo
      .getBoard(query)
      .then(({ data }) => {
        commit(ADD_BOARD, data);
      })
      .catch(error => {
        throw new Error(error);
      });
  }
};

const mutations = {
  [IS_LOADING](state) {
    state.isLoading = true;
  },
  [SET_BOARDS](state, boards) {
    setTimeout(
      () => ((state.isLoading = false), (state.boards = boards)),
      4000
    );
  },
  [ADD_BOARD](state, order) {
    //TODO: use actual api
    state.boards.push({ id: 3 });
    state.isLoading = false;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
