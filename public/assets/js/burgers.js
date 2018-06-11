/// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devour").on("click", function(event) {
        var id = $(this).data("id");
        var devouredObj = {
            devoured: false
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredObj
        }).then(
            function() {
                console.log("Burger devoured");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".target-burger").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            name: $("#newBurger").val().trim(),

        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new Burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});