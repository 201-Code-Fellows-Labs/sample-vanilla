function activateGallery() {
    //select all the thumbnails
    let thumbnails = document.querySelector("#gallery-thumbs").
                            querySelectorAll("img");
    //select main image
    let mainImage = document.querySelector("#gallery-photo > img")

    //put event litner to each tumbnail
    thumbnails.forEach(function(thumbnail) {
        thumbnail.addEventListener("click", function() {
            // set clicked image as main image
            let newImageSrc = thumbnail.dataset.largeVersion;
            mainImage.setAttribute("src", newImageSrc);
             // update Alt
            let newImageAlt = thumbnail.dataset.title;
            mainImage.setAttribute("alt", newImageAlt);
            //change current indictor 
            document.querySelector(".current").classList.remove("current");
            thumbnail.parentNode.classList.add("current");
        });
    });
   
}