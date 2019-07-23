import orders from "./orders.repo";

const repositories = {
  orders
};

export const repoAccessor = {
  get: name => repositories[name]
};
