// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".devour").on("click", function(event) {
    var id = $(this).data("id");
    var devour = $(this).data("devoured");
console.log("click")
    var newDevoured = {
      devoured: devour
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevoured
    }).then(
      function(data) {
        // Reload the page to get the updated list
        console.log("changed to", data)
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("submit")
    var newBurger = {
      name: $("#ca").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function(data) {
        console.log("created new burger", data);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});
