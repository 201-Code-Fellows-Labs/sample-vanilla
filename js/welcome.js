
function welcome() {
    let guestName = document.querySelector("#guest_name");
    let submitButton = document.querySelector("#submit_btn");
   
    // storing input from input-form
    submitButton.addEventListener ("click", function() {
        localStorage.setItem('guest_name', guestName.value);
    });

    let storedName =  localStorage.getItem('guest_name');
    console.log(storedName);
}
