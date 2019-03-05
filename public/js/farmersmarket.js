$(function() {
    $(".location-splash").on("click", function (event) {
        event.preventDefault();

        var info = $(this).data("info");
        var marketName = $(this).data("marketName");
        var city = $(this).data("city");
        var state = $(this).data("state");
        var website = $(this).data("website");
        var farmersMarketdata = {
            info: info,
            marketName: marketName,
            city: city,
            state: state,
            website: website,

          };

        $("#findMarket").on("click", function () {

            var zip= $("#zipCode").val().trim();
            getResults(zip);
        })
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
                function() {
                  console.log("data retrieved", farmersMarketdata);
                  searchResultsHandler()
                  // Reload the page to get the updated list
                  window.location.pathname = "/";
                }
              );
              function searchResultsHandler(farmersMarketdata) {
                for (var key in farmersMarketdata) {
                    alert(key);
                    var results = farmersMarketdata[key];
                    for (var i = 0; i < results.length; i++) {
                        var result = results[i];
                        for (var key in result) {
                            //only do an alert on the first search result
                            if (i == 0) {
                                alert(result[key]);
                            }
                        }
                    }
                }
            }
        }
            
        // }
        // //iterate through the JSON result object.
        // function searchResultsHandler(searchresults) {
        //     for (var key in searchresults) {
        //         alert(key);
        //         var results = searchresults[key];
        //         for (var i = 0; i < results.length; i++) {
        //             var result = results[i];
        //             for (var key in result) {
        //                 //only do an alert on the first search result
        //                 if (i == 0) {
        //                     alert(result[key]);
        //                 }
        //             }
        //         }
        //     }
        // }
        function getDetails(id) {
            $.ajax({
                type: "GET",
                contentType: "application/json; charset=utf-8",
                // submit a get request to the restful service mktDetail.
                url: "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=" + id,
                dataType: 'jsonp',
                jsonpCallback: 'detailResultHandler'
            });
        }
        //iterate through the JSON result object.
        function detailResultHandler(detailresults) {
            for (var key in detailresults) {
                alert(key);
                var results = detailresults[key];
                alert(results['GoogleLink']);
            }
        }
    }
}