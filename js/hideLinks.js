function hideLinks(){
    let musicNavLink = document.querySelector("#to_music_gallery");
    console.log("link = ",musicNavLink );
    let sportNavLink = document.querySelector("#to_sport_gallery");
    let storedName =  localStorage.getItem("guest_name");
    let storedPref =  localStorage.getItem("guest_pref");
    console.log(storedPref);

    if (!storedName) {
        musicNavLink.style.display="none";
        sportNavLink.style.display="none";
    }   else {
            if (storedPref === "music"){
                musicNavLink.style.display="inline-block";
               // sportNavLink.style.display="none";
            } else if (storedPref.value === "sport") {
               // musicNavLink.style.display="none";
                sportNavLink.style.display="inline-block";
            }
    }
    }
