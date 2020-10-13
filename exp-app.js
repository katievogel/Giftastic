//array of doctor who themed search buttons to appear on the page
var arrButtons = ["Ninth Doctor", "Tenth Doctor", "Eleventh Doctor", "Twelth Doctor", "Thirteenth Doctor", "Dalek", "Cyberman", "Adipose", "Missy", "Amy Pond", "Rory Williams", "Clara"];

//the function that creates a new button with attributes and click behavior. the click behavior triggers a GET request to the Giphy API to search the keyword. specific characteristics are retrieved that allow the gifs to paused and started again
function makeOneButton(label) {
    var newButton = document.createElement('button');
    $(newButton).attr("class", "gif-button btn btn-primary");
    $(newButton).attr("type", "button");
    $(newButton).attr("class", "gif-button");
    $(newButton).text(label);
    $(newButton).click(function () {
        var keyword = label;
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=0flPku5i7SaRbjTl02ZnhKrnYHH6Z4uk&q=Doctor Who " + keyword + "&limit=10&offset=0&rating=G&lang=en";
        console.log(queryURL);

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                for (var j = 0; j < response.data.length; j++) {
                    var imageUrl = response.data[j].images.original.url;
                    var gifImage = $("<img>");
                    var ratings = $("<p>");
                    gifImage.attr("src", response.data[j].images.original_still.url);
                    gifImage.attr("data-still", response.data[j].images.original_still.url);
                    gifImage.attr("data-animate", imageUrl);
                    gifImage.attr("data-state", "still");
                    gifImage.attr("alt", "gif image");
                    $("#images").prepend(gifImage);
                    $("#images").prepend(ratings, "Rating: " + response.data[j].rating);
                    $(gifImage).on("click", function () {
                        var state = $(this).attr("data-state");
                        if (state === "still") {
                            $(this).attr("src", $(this).attr("data-animate"));
                            $(this).attr("data-state", "animate");
                        } else {
                            $(this).attr("src", $(this).attr("data-still"));
                            $(this).attr("data-state", "still");
                        }
                    }
                    )
                        ;
                }
            })
    });
    document.querySelector('.new-buttons').append(newButton);
}
//function thats uses the makeOneButton function to make the default buttons from the initial array. 
function makeButtons() {
    for (var i = 0; i < arrButtons.length; i++) {
        makeOneButton(arrButtons[i]);
    }
}
makeButtons();

//clears search box after searching the gif keyword
function clearInput() {
    document.querySelector("form").reset();
}
//another GET request on the gif search button to search the API for whatever keyword was entered. pulls back the same characteristics that the other buttons and then creates the new button
$("#gif-me").on("click", function () {
    var gifSearch = $("input.form-control").val();
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=0flPku5i7SaRbjTl02ZnhKrnYHH6Z4uk&q=Doctor%20Who" + gifSearch + "&limit=10&offset=0&rating=G&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            for (var j = 0; j < response.data.length; j++) {
                var imageUrl = response.data[j].images.original.url;
                var gifImage = $("<img>");
                var ratings = $("<p>");
                gifImage.attr("src", response.data[j].images.original_still.url);
                gifImage.attr("data-still", response.data[j].images.original_still.url);
                gifImage.attr("data-animate", imageUrl);
                gifImage.attr("data-state", "still");
                gifImage.attr("alt", "gif image");
                $("#images").prepend(gifImage);
                $("#images").prepend(ratings, "Rating: " + response.data[j].rating);
                $(gifImage).on("click", function () {
                    var state = $(this).attr("data-state");
                    if (state === "still") {
                        $(this).attr("src", $(this).attr("data-animate"));
                        $(this).attr("data-state", "animate");
                    } else {
                        $(this).attr("src", $(this).attr("data-still"));
                        $(this).attr("data-state", "still");
                    }
                }); 
                clearInput(gifSearch);
                    
                
            }
        })
    makeOneButton(gifSearch);  
});



















