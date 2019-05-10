let thumbnails = document.querySelector("#gallery-thumbs").
                          querySelectorAll("img");

thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener("click", function() {
        // code to set clicked image as main image
    });
});