const notesModel = ($http, ENDPOINT_URI, $q) => {
  let allNotes = [];

  const getUrl = () => {
    return ENDPOINT_URI + "/notes";
  };

  const extract = ({ data }) => {
    allNotes = data;
  };

  const handleError = e => {
    console.error(e);
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
    console.log(note);
    if (note) {
      return $q.when(note);
    }
  };

  const getState = () => {
    return allNotes;
  };

  const create = data => {
    return $http({
      data,
      url: `${ENDPOINT_URI}/notes`,
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

notesModel.$inject = ["$http", "ENDPOINT_URI", "$q"];

export { notesModel };
