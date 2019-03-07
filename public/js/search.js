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
<<<<<<< HEAD
              
=======
                // debugger
>>>>>>> cecf4754b63eca8732e610b7c73e91306914a8b4
                searchResultsHandler(res);
            })
        }
        async function searchResultsHandler(farmersMarketdata) {
            console.log("helloooooooooo")
            console.log(farmersMarketdata.results)
            var results = farmersMarketdata.results;
            results.forEach(function (marketResult) {
<<<<<<< HEAD
                console.log(marketResult.marketname)
                
=======
                console.log(marketResult.marketName)
                // debugger;
>>>>>>> cecf4754b63eca8732e610b7c73e91306914a8b4
                //append tables here
                var tableRow = "<tr>";
                tableRow += "<td>" + marketResult.marketname + "</td>";
                tableRow += "<td>" + zip + "</td>";
                tableRow += '<td>' + '<button class="rating" marketName="'+ marketResult.marketname +'  id="' + marketResult.id + '">Rate</button></td>';
                tableRow += '<td>' + '<button class="moreInfo" id="' + marketResult.id + '">More Info</button></td>';
                tableRow += "</tr>";
                $("tbody").append(tableRow);

            })

        };

        //this is another way to write an event listener which will work on elements created via JavaScript
        $(document).on("click", ".moreInfo", function (e) {
            event.preventDefault();
            console.log("working")
            var marketdetails = e.target.id;
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
                    async function detailResultHandler(farmersmarket) {
                        var results = farmersmarket.results;
                        console.log(results);
                        results.forEach(function (resultsDetail) {
                            var detailRow = "<tr>";
                            
                            detailRow += "<td>" + resultsDetail.Address + "</td>";
                            detailRow += "<td>" + resultsDetail.GoogleLink + "</td>";
                            detailRow += "<td>" + resultsDetail.Schedule + "</td>";
                            detailRow += "<td>" + resultsDetail.Products + "</td>";
                            detailRow += "</tr>";
                            $("#details-here").append(detailRow);
                            //TO-DO: Natalie, get the information returned from the second API call to "populate" into a 
                            //modal and display for the user

                            console.log(results.googlelink);
                            console.log(results.address);
                            console.log(results.schedule);
                            console.log(results.products);

                        })
                    }
            }
        })
    });
    $(document).on("click", ".rating", function (e) {
        console.log("hey click handler")
        console.log(e.target)

        var recInfo = $(this).attr("id");
        var recName = $(this).attr("marketName");
        var recId = $(this).attr("id");

        $.ajax({
            type: "POST",
            url: "api/recommendations",
            data: {
                info: recInfo,
                marketName: recName,
                city: null,
                state: null,
                website: null,
            }
        }).then(function (res) {
            console.log(res)
        })
    })
})
<<<<<<< HEAD



            // $(document).on("click", ".rating", function (e) {

            //     //TO-DO: ABEL- write the 'ajax' POST call to "api/recommended" right here
=======
                //TO-DO: ABEL- write the 'ajax' POST call to "api/recommended" right here
>>>>>>> cecf4754b63eca8732e610b7c73e91306914a8b4

            //     //hint: use e.target to get info about which button was pressed.
            //     //start with console.log(e.target)

