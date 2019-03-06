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
            var results = farmersMarketdata.results;
            results.forEach(function (marketResult) {
                console.log(marketResult.id);
                console.log(marketResult.marketname);
                //append tables here
                var tableRow = $("tr")
                // console.log(key);
                var newMarketName = $("td").text(key);

                tableRow.append(newMarketName);

                $("#append-here").append(tableRow);
            })


            // console.log(farmersMarketdata);
            for (var data in farmersMarketdata) {
                // console.log(data);
                var results = farmersMarketdata[data];
                for (var i = 0; i < results.length; i++) {
                    var result = results[i];
                    for (var key in result) {
                        //only do an alert on the first search result
                        if (i === 0) {
                            var tableRow = $("tr")
                            // console.log(key);
                            var newMarketName = $(tableRow).append(
                                $("td").text(key),
                            );

                            var newCity = $(tableRow).append(
                                $("td").text(key),
                            );

                            var newState = $(tableRow).append(
                                $("td").text(key),
                            );

                            var newWebsite = $(tableRow).append(
                                $("td").text(key),
                            );

                            $("#append-here").append(tableRow);
                            // Append the new row to the table
                            // $("#market-info > tbody").append(newMarketName);
                            // $("#market-info > tbody").append(newCity);
                            // $("#market-info > tbody").append(newState);
                            // $("#market-info > tbody").append(newWebsite);

                            //append method in this area
                            // var marketName = $(key).append("marketName");
                            // var city = $(key).append("city");
                            // var state = $(key).append("state");
                            // var website = $(key).append("website");
                            console.table(result[key]);
                        }
                    }
                }
            }
        }
    });

    //we can use this code below as the start of the "recommend button" which will be next to each result
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

