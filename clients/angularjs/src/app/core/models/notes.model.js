const notesModel = ($http, ENDPOINT_URI) => {
  let allNotes = [];

  const getUrl = () => {
    return `${ENDPOINT_URI}/notes`;
  };

  const extract = ({ data }) => {
    allNotes = data;
  };

  const handleError = e => {
    return [
      {
        title: "server down",
        description: "server down",
      },
    ];
  };

  const get = () => {
    return $http
      .get(getUrl())
      .then(extract)
      .catch(handleError);
  };

  const getOne = query => {
    const note = allNotes.find(note => note.id === query.id);
    if (note) {
      return new Promise(resolve => resolve(note));
    }
  };

  const getState = () => {
    return allNotes;
  };

  const create = data => {
    return $http({
      data,
      url: getUrl(),
      method: "POST",
    });
  };

  return {
    get,
    getOne,
    getState,
    create,
  };
};

notesModel.$inject = ["$http", "ENDPOINT_URI"];

export { notesModel };
