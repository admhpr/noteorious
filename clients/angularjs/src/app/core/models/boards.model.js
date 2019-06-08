const boardsModel = ($http, ENDPOINT_URI, $q) => {
  let allBoards = [];
  let id = 0;

  const getUrl = () => {
    return ENDPOINT_URI + "/boards";
  };

  const extract = ({ data }) => {
    allBoards = data;
  };

  const handleError = e => {
    console.error(e);
    return [
      {
        title: "server down",
        description: "server down"
      }
    ];
  };

  const get = () => {
    console.log(`get::BoardsModel`);
    return $http
      .get(getUrl())
      .then(extract)
      .catch(handleError);
  };

  const getOne = query => {
    const board = allBoards.find(board => board.id === query.id);
    if (board) {
      return $q.when(board);
    }
  };

  const getState = () => {
    return allBoards;
  };

  const create = data => {};

  return {
    get,
    getOne,
    getState,
    create
  };
};

boardsModel.$inject = ["$http", "ENDPOINT_URI", "$q"];

export { boardsModel };
