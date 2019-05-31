export default function BoardsModel($http, ENDPOINT_URI) {
    var service = this;

    function extract(result) {
        return result.data;
    }

    function handleError(e) {
        console.error(e)
        return [{
            title: "server down",
            description: "server down"
        }]
    }

    function getUrl() {
        return ENDPOINT_URI + '/boards';
    }
    service.all = function () {
        return $http.get(getUrl()).then(extract).catch(handleError);
    };

}