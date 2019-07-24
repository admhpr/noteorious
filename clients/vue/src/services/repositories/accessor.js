import boards from "./boards.repo";

const repositories = {
  boards
};

export const repoAccessor = {
  get: name => repositories[name]
};
