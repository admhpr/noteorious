import api from "@services/api/setup";

const resource = "/orders";
export default {
  getOrders() {
    return api.get();
  },
  getOrder(id) {
    return api.get(`${resource}/${id}`);
  },
  createOrder(payload) {
    return api.post(`${resource}`, payload);
  }
};
