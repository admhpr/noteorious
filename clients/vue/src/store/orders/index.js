import { repoAccessor } from "@services";
import { GET_ORDERS, CREATE_ORDER } from "./action.types";
import { IS_LOADING, SET_ORDERS, ADD_ORDER } from "./mutation.types";

const repo = repoAccessor.get("orders");
const state = {
  orders: [],
  isLoading: true
};

const getters = {
  orders(state) {
    return state.orders;
  },
  isLoading(state) {
    return state.isLoading;
  }
};

const actions = {
  [GET_ORDERS]({ commit }) {
    commit(IS_LOADING);
    return repo
      .getOrders()
      .then(({ data }) => {
        commit(SET_ORDERS, data);
      })
      .catch(error => {
        throw new Error(error);
      });
  },
  [CREATE_ORDER]({ commit }, query) {
    commit(IS_LOADING);
    return repo
      .getOrder(query)
      .then(({ data }) => {
        commit(ADD_ORDER, data);
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
  [SET_ORDERS](state, orders) {
    setTimeout(
      () => ((state.isLoading = false), (state.orders = orders)),
      1000
    );
  },
  [ADD_ORDER](state, order) {
    //TODO: use actual api
    state.orders.push({ id: 3 });
    state.isLoading = false;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
