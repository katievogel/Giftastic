
var arrButtons = ["Ninth Doctor", "Tenth Doctor", "Eleventh Doctor", "Twelth Doctor", "Thirteenth Doctor", "Dalek", "Cyberman", "Adipose", "Missy", "Amy Pond", "Captain Jack", "Clara"];


function makeButtons() {
    for (var i = 0; i < arrButtons.length; i++) {
        var gifButtons = document.createElement('div');
        gifButtons.innerHTML = '<div>\
      <button class="gif-button" type="button"\
       class="btn btn-primary">' + arrButtons[i] + ' </button>\
        </div>';
        document.querySelector('div').append(gifButtons);
    }
    $(".gif-button").on("click", function () {
        var keyword = arrButtons[i];
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=0flPku5i7SaRbjTl02ZnhKrnYHH6Z4uk&q=Doctor%20Who" + keyword + "&limit=10&offset=0&rating=G&lang=en";

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
    });
}
makeButtons();

$("#gif-me").on("click", function () {
    var gifSearch = $("input.form-control").val();
    arrButtons.push(gifSearch);
    function addButton() {
        var newButton = document.createElement('div');
        newButton.innerHTML = '<div>\
    <button class="gif-button" type="button"\
     class="btn btn-primary">' + gifSearch + ' </button>\
      </div>';
        document.querySelector('div').append(newButton);
    }
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
    addButton();
});









