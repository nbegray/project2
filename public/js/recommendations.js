
//document .on load fires when the page is rendered
$(document).ready(function () {
    console.log("listening")
    var zip = $("#zipcode-input").val().trim();
    $.ajax({
        method: "GET",
        url: "/api/recommendations",
        dataType: 'json'
    }).then(function (res) {
        console.log("listening")
        console.log(res)
        var results = res;
        results.forEach(function (marketResult) {
            //append tables here
            var tableRow = "<tr>";
            tableRow += "<td>" + marketResult.marketName + "</td>";
            tableRow += "<td>" + zip + "</td>";
            // tableRow += '<td>' + '<button class="rating" id="' + marketResult.info + '">Rate</button></td>';
            tableRow += '<td>' + '<button class="moreInfo" id="' + marketResult.info + '">More Info</button></td>';
            tableRow += "</tr>";
            $("tbody").append(tableRow);
        })
    });




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
            })
            //iterate through the JSON result object.
            function detailResultsHandler(farmersmarket) {
                console.log(farmersmarket.marketdetails)
                var results = farmersmarket.marketdetails
                var detailRow = "<tr>";
                detailRow += "<td>" + results.Address + "</td>";
                detailRow += "<td><a href='" + results.GoogleLink + "'>Google</a></td>";
                detailRow += "<td>" + results.Products + "</td>";
                detailRow += "<td>" + results.Schedule + "</td>";
                detailRow += "</tr>";

                $("#details-here").empty();

                $("#details-here").append(detailRow);
                $(".modal").modal("show");


            }
        }


    })
})
