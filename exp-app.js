
var arrButtons = ["Ninth Doctor", "Tenth Doctor", "Eleventh Doctor", "Twelth Doctor", "Thirteenth Doctor", "Dalek", "Cyberman", "Adipose", "Missy", "Amy Pond", "Rory Williams", "Clara"];

function makeOneButton (label) {
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
                    gifImage.attr("src", imageUrl);
                    gifImage.attr("alt", "gif image");
                    $("#images").prepend(gifImage);
                }
            })
    });
    document.querySelector('div').append(newButton);
}

function makeButtons() {
    for (var i = 0; i < arrButtons.length; i++) {
        makeOneButton(arrButtons[i]);
    }
}
makeButtons();

$("#gif-me").on("click", function () {
    var gifSearch = $("input.form-control").val();
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=0flPku5i7SaRbjTl02ZnhKrnYHH6Z4uk&q=Doctor%20Who" + gifSearch + "&limit=10&offset=0&rating=G&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            var imageUrl = response.data.image_original_url;
            var gifImage = $("<img>");
            gifImage.attr("src", imageUrl);
            gifImage.attr("alt", "gif image");
            $("#images").prepend(gifImage);
        })
    makeOneButton(gifSearch);
});









