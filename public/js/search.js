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
                var tableRow = "<tr>";
                // console.log(key);
                tableRow += "<td>" + marketResult.marketname + "</td>";
                tableRow += "<td>" + "insert city here" + "</td>";
                tableRow += "<td>" + "insert state here" + "</td>";
                tableRow += "<td>" + "insert website here" + "</td>";
                tableRow += "</tr>";
                console.log(tableRow)
                $("tbody").append(tableRow);
            })
    };

//     //we can use this code below as the start of the "recommend button" which will be next to each result
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

})
