$(document).ready(function () {

    $("#search-btn").on("click", function (event) {
        event.preventDefault();
        var zip = $("#zipCode").val().trim();
        getResults(zip);
        function getResults(zip) {
            $.ajax({
                type: "GET",
                contentType: "application/json; charset=utf-8",
                // submit a get request to the restful service zipSearch or locSearch.
                url: "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=" + zip,
                // or
                // url: "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/locSearch?lat=" + lat + "&lng=" + lng,
                dataType: 'jsonp',
                jsonpCallback: 'searchResultshandler',
            }).then(function (res) {
                    console.log(res)
                    searchResultsHandler(res);

                    //TODO: use J-Query to append results to table
                    //NOTE: make sure they include a button to "recommend" each market
                    // for the appended elements, write a listener that will send an ajax call to the server
                    // with the information for that market to save it into the db
                })
        }
        function searchResultsHandler(farmersMarketdata) {
            for (var key in farmersMarketdata) {
                alert(key);
                var results = farmersMarketdata[key];
                for (var i = 0; i < results.length; i++) {
                    var result = results[i];
                    for (var key in result) {
                        //only do an alert on the first search result
                        if (i === 0) {
                            alert(result[key]);
                        }
                    }
                }
            }
        }
    });


    $("#add-btn").on("click", function (event) {
        event.preventDefault();
        var marketNameInput = $("#market-name-input").val();
        var cityInput = $("#city-input").val();
        var stateInput = $("#state-input").val();
        var zipcodeInput = $("#zipcode-input").val();
        console.log(marketNameInput);
        console.log(cityInput);
        console.log(stateInput);
        console.log(zipcodeInput);
        $.post("api/add", {}, function (res) {

        })
    })
})

