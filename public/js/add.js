$(document).ready(function () {
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

