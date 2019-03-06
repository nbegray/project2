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
                searchResultsHandler(res);
            })
        }
        async function searchResultsHandler(farmersMarketdata) {
            var results = farmersMarketdata.results;
            results.forEach(function (marketResult) {
                //append tables here
                var tableRow = "<tr>";
                tableRow += "<td>" + marketResult.marketname + "</td>";
                tableRow += "<td>" + zip + "</td>";
                tableRow += '<td>' + '<button class="rating" id="' + marketResult.id + '">Rate</button></td>';
                tableRow += '<td>' + '<button class="moreInfo" id="' + marketResult.id + '">More Info</button></td>';
                tableRow += "</tr>";
                $("tbody").append(tableRow);
            })
        };

        //this is another way to write an event listener which will work on elements created via JavaScript
        $(document).on("click", ".moreInfo", function (e) {
            event.preventDefault();
            console.log("working")
            var marketdetails= e.target.id;
            getDetails(marketdetails);

            function getDetails(marketdetails) {
                $.ajax({
                    type: "GET",
                    contentType: "application/json; charset=utf-8",
                    // submit a get request to the restful service mktDetail.
                    url: "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=" + marketdetails,
                    dataType: 'jsonp',
                    jsonpCallback: 'detailResultHandler'
                }).then(function (res) {
                    console.log(res)
                    detailResultsHandler(res);
                }),
                    //iterate through the JSON result object.
                    function detailResultHandler(marketdetails) {
                        var results = marketdetails.results;
                        console.log(moreMarketDet);
                        results.forEach(function (marketresults) {

                            //TO-DO: Natalie, get the information returned from the second API call to "populate" into a 
                            //modal and display for the user

                            console.log(marketresults.GoogleLink);
                            console.log(marketresults.Address);
                            console.log(marketresults.Schedule);
                            console.log(marketresults.Products);

                        })
                    }
            }

            $(document).on("click", ".rating", function(e){

                //TO-DO: ABEL- write the 'ajax' POST call to "api/recommended" right here

                //hint: use e.target to get info about which button was pressed.
                //start with console.log(e.target)


            })

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
});
