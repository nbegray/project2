// // Get references to page elements
// var $exampleText = $("#example-text");
// var $exampleDescription = $("#example-description");
// var $submitBtn = $("#submit");
// var $exampleList = $("#example-list");


var API = {
  getMarket: function getMarket(zip) {
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
      jsonpCallback: 'searchResultsHandler'
    });
    //iterate through the JSON result object.
    function searchResultsHandler(searchResults) {
      for (var key in searchResults) {
        alert(key);
        var results = searchresults[key];
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
      console.log(result[chandler]);
    
    
s

//   }
    
//     function(example) {
//     return $.ajax({
//       headers: {
//         "Content-Type": "application/json"
//       },
//       type: "POST",
//       url: "api/examples",
//       data: JSON.stringify(example)
//     });
//   },
//   getExamples: function () {
//     return $.ajax({
//       url: "api/examples",
//       type: "GET"
//     });
//   },
//   deleteExample: function (id) {
//     return $.ajax({
//       url: "api/examples/" + id,
//       type: "DELETE"
//     });
//   }
// };

// function getResults(zip) {
//   // or
//   // function getResults(lat, lng) {
//   $.ajax({
//     type: "GET",
//     contentType: "application/json; charset=utf-8",
//     // submit a get request to the restful service zipSearch or locSearch.
//     url: "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=" + zip,
//     // or
//     // url: "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/locSearch?lat=" + lat + "&lng=" + lng,
//     dataType: 'jsonp',
//     jsonpCallback: 'searchResultsHandler'
//   });
// }
// //iterate through the JSON result object.
// function searchResultsHandler(searchResults) {
//   for (var key in searchresults) {
//     alert(key);
//     var results = searchresults[key];
//     for (var i = 0; i < results.length; i++) {
//       var result = results[i];
//       for (var key in result) {
//         //only do an alert on the first search result
//         if (i == 0) {
//           alert(result[key]);
//         }
//       }
//     }
//   }
// }


// // // Get references to page elements
// // var $exampleText = $("#example-text");
// // var $exampleDescription = $("#example-description");
// // var $submitBtn = $("#submit");
// // var $exampleList = $("#example-list");

// // // The API object contains methods for each kind of request we'll make
// // var API = {
// //   saveExample: function(example) {
// //     return $.ajax({
// //       headers: {
// //         "Content-Type": "application/json"
// //       },
// //       type: "POST",
// //       url: "api/examples",
// //       data: JSON.stringify(example)
// //     });
// //   },
// //   getExamples: function() {
// //     return $.ajax({
// //       url: "api/examples",
// //       type: "GET"
// //     });
// //   },
// //   deleteExample: function(id) {
// //     return $.ajax({
// //       url: "api/examples/" + id,
// //       type: "DELETE"
// //     });
// //   }
// // };

// // // refreshExamples gets new examples from the db and repopulates the list
// // var refreshExamples = function() {
// //   API.getExamples().then(function(data) {
// //     var $examples = data.map(function(example) {
// //       var $a = $("<a>")
// //         .text(example.text)
// //         .attr("href", "/example/" + example.id);

// //       var $li = $("<li>")
// //         .attr({
// //           class: "list-group-item",
// //           "data-id": example.id
// //         })
// //         .append($a);

// //       var $button = $("<button>")
// //         .addClass("btn btn-danger float-right delete")
// //         .text("ｘ");

// //       $li.append($button);

// //       return $li;
// //     });

// //     $exampleList.empty();
// //     $exampleList.append($examples);
// //   });
// // };

// // // handleFormSubmit is called whenever we submit a new example
// // // Save the new example to the db and refresh the list
// // var handleFormSubmit = function(event) {
// //   event.preventDefault();

// //   var example = {
// //     text: $exampleText.val().trim(),
// //     description: $exampleDescription.val().trim()
// //   };

// //   if (!(example.text && example.description)) {
// //     alert("You must enter an example text and description!");
// //     return;
// //   }

// //   API.saveExample(example).then(function() {
// //     refreshExamples();
// //   });

// //   $exampleText.val("");
// //   $exampleDescription.val("");
// // };

// // // handleDeleteBtnClick is called when an example's delete button is clicked
// // // Remove the example from the db and refresh the list
// // var handleDeleteBtnClick = function() {
// //   var idToDelete = $(this)
// //     .parent()
// //     .attr("data-id");

// //   API.deleteExample(idToDelete).then(function() {
// //     refreshExamples();
// //   });
// // };

// // // Add event listeners to the submit and delete buttons
// // $submitBtn.on("click", handleFormSubmit);
// // $exampleList.on("click", ".delete", handleDeleteBtnClick);
