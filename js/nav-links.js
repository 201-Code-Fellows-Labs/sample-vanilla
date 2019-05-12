function activateNavLinks() {
    
    let url = window.location.pathname;
    console.log("."+url);
    let nav_links = document.querySelectorAll("#menu li a")
    nav_links.forEach (function(nav_link){
        let link = nav_link.getAttribute("href");
        console.log(link); 
        if("."+url==link){
            document.querySelector(".active").classList.remove("active");
            nav_link.classList.add("active");
        }
    });
    
}