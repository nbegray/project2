
//document .on load fires when the page is rendered
$(document).on("load", function(){
    $.ajax({
        method: "GET",
        url: "/api/recommendations",
        dataType: 'jsonp'
    }).then(function (res) {
        console.log(res)  
    });
});