
//document .on load fires when the page is rendered
var append = "";
$.ajax({
    method: "GET",
    url: "/api/recommendations",
    dataType: 'jsonp'
}).then(function (res) {
    console.log(res)
    var results = res;
    results.forEach(function (marketResult) {
        //append tables here
        var tableRow = "<tr>";
        tableRow += "<td>" + marketResult.dataValues.marketname + "</td>";
        tableRow += "<td>" + zip + "</td>";
        tableRow += '<td class="rating" id="' + marketResult.id + '>' + 'Rate' + '</td>';
        tableRow += '<td class="moreInfo" id="' + marketResult.id + '>' + 'More Info' + '</td>';
        tableRow += "</tr>";
        $("tbody").append(tableRow);
        append += tableRow;
    }) 
});
