
function welcome() {
    let guestName = document.querySelector("#guest_name");
    let submitButton = document.querySelector("#submit_btn");
    let dynamic = document.querySelector("#dynamic");
    let pref = document.querySelector("input[name=pref]:checked");
    //if dynamic div exists on the page - to prevent js errors on other pages
    if(dynamic){ 
    //listen for click event on submit button
    submitButton.addEventListener ("click", function() {
        // storing input from input-form 

                if (!guestName.value){
                    document.querySelector("#validation").innerHTML = "<span><i> Please, enter your name</i></span>";
                    return false;
                } 
                    localStorage.setItem('guest_name', guestName.value);
                    localStorage.setItem("guest_pref", pref.value);
                    document.location.reload();                        
        });
        greetings();   
    }
}

function greetings(){
    let storedName =  localStorage.getItem("guest_name");
    let storedPref =  localStorage.getItem("guest_pref");
    let greetings = document.querySelector("#greetings");
    let greetings2 = document.querySelector("#greetings2");
        
        greetings.innerHTML = "Welcome to our gallery " + "<span>"+ storedName +" </span>!";  
        greetings2.innerHTML = "Glad to see you " + "<span>"+ storedName +" </span>!<br> I bet you'll enjoy our <span>" +
        storedPref + "</span> gallery!";  
        console.log(storedName);
        console.log(storedPref);
  
}

function hideDiv(){  
    let dynamic = document.querySelector("#dynamic");
    let form = document.querySelector("#formDiv");
    let welcomeBackDiv = document.querySelector("#welcomeBackDiv"); 
    let resetDiv = document.querySelector("#resetDiv"); 
    let storedName =  localStorage.getItem("guest_name");
    let greetings = document.querySelector("#greetings");
    
    if (!storedName) {
        greetings.style.display="none";
    }    
        if(dynamic){    //if dynamic div exist on the page          
            if (!storedName) {
                form.style.display = "inline-block";
                welcomeBackDiv.style.display="none";
                resetDiv.style.display="none";

            }    
            else {
                form.style.display = "none";
                welcomeBackDiv.style.display="inline-block";
                resetDiv.style.display="inline-block";

            }
        }
    }

function reset() {
    let dynamic = document.querySelector("#dynamic");
    let resetButton = document.querySelector("#reset_btn");
  //if dynamic div exists on the page
    if(dynamic){ 
        //listen for click event on reset button
        resetButton.addEventListener ("click", function() {
            localStorage.clear();
            document.location.reload(); 
        });
    }
}
