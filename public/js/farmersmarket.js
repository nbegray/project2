$(document.ready, function () {
    $(function () {
        $("#search-btn").on("click", function (event) {
            event.preventDefault();

            // var id = $(this).data("id");
            // var marketName = $(this).data("marketName");
            // var city = $(this).data("city");
            // var state = $(this).data("state");
            // var website = $(this).data("website");

            var farmersMarketdata = {
                'id': id,
                'marketname': marketName,
              
            };
            var farmersMarketdetail = {

                'city': city,
                'state': state,
                'website': website,

            }



            var zip = $("#zipCode").val().trim();
            getResults(zip);

            function getResults(zip) {
                // or
                // function getResults(lat, lng) {
                $.ajax({
                    type: "GET",
                    contentType: "application/json; charset=utf-8",
                    // submit a get request to the restful service zipSearch or locSearch.
                    url: "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=" + zip,
                    // or
                    // url: "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/locSearch?lat=" + lat + "&lng=" + lng,
                    dataType: 'jsonp',
                    jsonpCallback: 'searchResultshandler',
                    data: farmersMarketdata,



                }).then(
                    function () {
                        console.log("data retrieved", farmersMarketdata);
                        
                        // Reload the page to get the updated list
                        window.location.pathname = "/";
                    })
                    searchResultsHandler()
            };
            function searchResultsHandler(searchresults) {
                let searchresults = farmersMarketdata [req.params.marketName];
                for (var key in searchresults) {
                    console.table(key);
                    var results = searchresults[key];
                    for (var i = 0; i < results.length; i++) {
                        var result = results[i];
                        for (var key in result) {
                            //only do an alert on the first search result
                            if (i == 0) {
                                console.table(result[key]);
                            }
                        }
                    }
                }
            }
            function getDetails(farmersMarketdata) {
                $.ajax({
                    type: "GET",
                    contentType: "application/json; charset=utf-8",
                    // submit a get request to the restful service mktDetail.
                    url: "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?marketname=" + marketName,
                    dataType: 'jsonp',
                    jsonpCallback: 'detailResultHandler',
                    data: farmersMarketdetail,
                   
                }) .then(
                    function () {
                        console.log("data retrieved", farmersMarketdetail );
                        
                        // Reload the page to get the updated list
                        window.location.pathname = "/";
                    })
                    detailResultHandler ();
            }
            //iterate through the JSON result object.
            function detailResultHandler(detailresults) {
                let detailresults = farmersMarketdetail[req.params.city] + [req.params.state]+[req.params.zip] + [req.params.website]
                for (var key in detailresults) {
                    alert(key);
                    var results = detailresults[key];
                    alert(results['GoogleLink']);
                }
            }
        })
    });
});
