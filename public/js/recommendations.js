
//document .on load fires when the page is rendered
$(document).ready(function () {
    $("#add-btn").on("click", function (event) {
        event.preventDefault();
        // console.log("listening")
            var zip = $("#zipcode-input").val().trim();
            $.ajax({
                method: "GET",
                url: "/api/recommendations",
                dataType: 'json',
            }).then(function (res) {
                console.log("listening")
                console.log(res)
                var results = res;
                results.forEach(function (marketResult) {
                    //append tables here
                    var tableRow = "<tr>";
                    tableRow += "<td>" + marketResult.marketName + "</td>";
                    tableRow += "<td>" + zip + "</td>";
                    tableRow += '<td>' + '<button class="rating" id="' + "marketResult.dataValues.id" + '">Rate</button></td>';
                    tableRow += '<td>' + '<button class="moreInfo" id="' + "marketResult.dataValues.id " + '">More Info</button></td>';
                    tableRow += "</tr>";
                    $("tbody").append(tableRow);
                })
            });
        })
    });