var formGrab1 = $('#form-1').on("click", initialize());
var formGrab2 = $('.form-2');

var queryURL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=fOyHE7AonzJBLnZlxtiVic1f3KpLVZk8'

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {

    return response;

    function initialize() {

    }
    initialize();

})