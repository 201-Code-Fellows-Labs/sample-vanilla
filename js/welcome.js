
function welcome() {
    let guestName = document.querySelector("#guest_name");
    let submitButton = document.querySelector("#submit_btn");
   
    
    let form = document.querySelector("form"); 
    //if form exist on the page
    if(form){ 
    //listen for click event on submit button
    submitButton.addEventListener ("click", function() {
        // storing input from input-form
    localStorage.setItem('guest_name', guestName.value);
        greetings();
    // let storedName =  localStorage.getItem('guest_name');
    // let greetings = document.querySelector("#greetings");
    //     if (storedName) {
    //         greetings.innerHTML = "Welcome " + storedName;
    //         event.preventDefault();   
    //         } 
    //     else {
    //         greetings.innerHTML = "Please enter your name";
    //         event.preventDefault();
    //         }
        });
    }
}

function greetings(){
    let storedName =  localStorage.getItem('guest_name');
    let greetings = document.querySelector("#greetings");
    console.log(storedName);
    if (storedName) {
        greetings.innerHTML = "Welcome to my gallery " + "<span>"+ storedName +" </span>!";
      //  event.preventDefault();   
        } 
    else {
        greetings.innerHTML = "Please enter your name";
        //event.preventDefault();
        }
}

// function hideForm(){
//     formDiv = document.getElementById('form');
//     formDiv.style.display = 'none';
// }
