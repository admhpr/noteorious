const boardsModel = ($http, ENDPOINT_URI, $q) => {
    let allBoards = [];
    let id = 0;

    const getUrl = () => {
        return ENDPOINT_URI + '/boards';
    };

    const extract = (result) => {
        return result.data;
    };

    const handleError = (e) => {
        console.error(e)
        return [{
            title: "server down",
            description: "server down"
        }]
    }

    const get = () => {
        return $http.get(getUrl())
            .then(extract).catch(handleError);
    };

    const getOne = (query) => {

    };

    const getState = () => {
        return allBoards;
    };

    const create = (data) => {

    };

    return {
        get,
        getOne,
        getState,
        create
    };
};

boardsModel.$inject = ['$http', 'ENDPOINT_URI', '$q'];

export {
    boardsModel
};