
function welcome() {
    let guestName = document.querySelector("#guest_name");
    let submitButton = document.querySelector("#submit_btn");
   
    
    let dynamic = document.querySelector("#dynamic");
    //if form exist on the page
    if(dynamic){ 
    //listen for click event on submit button
    submitButton.addEventListener ("click", function() {
        // storing input from input-form
    localStorage.setItem('guest_name', guestName.value);
    document.location.reload(); 
        greetings();
        });
    }
}

function greetings(){
    let storedName =  localStorage.getItem('guest_name');
    let greetings = document.querySelector("#greetings");
    console.log(storedName);
    if (storedName) {
        greetings.innerHTML = "Welcome to my gallery " + "<span>"+ storedName +" </span>!";  
        } 
}

function hideForm(){  
    let dynamic = document.querySelector("#dynamic");
    let form = document.querySelector("#formDiv");
    let welcomeBackDiv = document.querySelector("#welcomeBackDiv"); 
    let resetDiv = document.querySelector("#resetDiv"); 
    let storedName =  localStorage.getItem("guest_name");
    //if dynamic form exist on the page
  if(dynamic){        
        if (storedName) {   
            form.style.display = "none";
            welcomeBackDiv.style.display="inline-block";
            resetDiv.style.display="inline-block";
        }   
        else {
            form.style.display = "inline-block";
            welcomeBackDiv.style.display="none";
            resetDiv.style.display="none";
         }    
    }
}

function reset() {
    let dynamic = document.querySelector("#dynamic");
    let resetButton = document.querySelector("#reset_btn");
  //if form exist on the page
    if(dynamic){ 
        //listen for click event on reset button
        resetButton.addEventListener ("click", function() {
            localStorage.removeItem("guest_name");
            document.location.reload(); 
        });
    }
}
