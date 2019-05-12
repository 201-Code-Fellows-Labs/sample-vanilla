function activateNavLinks() {
    
    let url = window.location.pathname;
    let new_url ="./"+url.split("/").pop(); //hack to make this work with github pages url
    console.log(new_url);

    let nav_links = document.querySelectorAll("#menu li a")
    nav_links.forEach (function(nav_link){
        let link = nav_link.getAttribute("href");
        console.log(link); 
        if(new_url==link){
            document.querySelector(".active").classList.remove("active");
            nav_link.classList.add("active");
        }
    });
    
}