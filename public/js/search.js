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
                debugger
                searchResultsHandler(res);
            })
        }
        async function searchResultsHandler(farmersMarketdata) {
            console.log("helloooooooooo")
            console.log(farmersMarketdata.results)
            var results = farmersMarketdata.results;
            results.forEach(function (marketResult) {
                console.log(marketResult.marketName)
                debugger;
                //append tables here
                var tableRow = "<tr>";
                tableRow += "<td>" + marketResult.marketname + "</td>";
                tableRow += "<td>" + zip + "</td>";
                tableRow += '<td>' + '<button class="rating" marketName="' + marketResult.marketname + '  id="' + marketResult.id + '">Rate</button></td>';
                tableRow += '<td>' + '<button class="moreInfo" id="' + marketResult.id + '">More Info</button></td>';
                tableRow += "</tr>";
                $("tbody").append(tableRow);

            })

        };

        //this is another way to write an event listener which will work on elements created via JavaScript
        $(document).on("click", ".moreInfo", function (e) {
            event.preventDefault();
            console.log("working")
            var id = e.target.id;
            getDetails(id);

            function getDetails(id) {
                $.ajax({
                    type: "GET",
                    contentType: "application/json; charset=utf-8",
                    // submit a get request to the restful service mktDetail.
                    url: "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=" + id,
                    dataType: 'jsonp',
                    jsonpCallback: 'detailResultHandler',
                }).then(function (response) {
                    console.log(response),
                        detailResultHandler(response)
                })
                //iterate through the JSON result object.
                function detailResultHandler(market) {
                    var results = market.results;
                    console.log(results);
                    results.forEach(function (marketdetails) {
                        var detailRow = "<tr>";

                        detailRow += "<td>" + marketdetails.address + "</td>";
                        detailRow += "<td>" + marketdetails.googlelink + "</td>";
                        detailRow += "<td>" + marketdetails.schedule + "</td>";
                        detailRow += "<td>" + marketdetails.products + "</td>";
                        detailRow += "</tr>";
                        $("#details-here").append(detailRow);
                        //TO-DO: Natalie, get the information returned from the second API call to "populate" into a 
                        //modal and display for the user

                        // console.log(results.googlelink);
                        // console.log(results.address);
                        // console.log(results.schedule);
                        // console.log(results.products);

                    })
                }
            }
        })
    });
    $(document).on("click", ".rating", function (e) {
        console.log("hey click handler")

        var recId = $(this).attr("id");

        $.ajax({
            type: "POST",
            url: "api/recommendation",
            data: {
                id: recId,
                info: null,
                marketName: null,
                city: null,
                state: null,
                website: null,
            }
        }).then(function (res) {
            console.log(res)
        })
    })
})



// $(document).on("click", ".rating", function (e) {

                //TO-DO: ABEL- write the 'ajax' POST call to "api/recommended" right here

                //hint: use e.target to get info about which button was pressed.
                //start with console.log(e.target)

