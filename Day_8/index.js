var Modal = document.getElementsByClassName("modal")
var Button = document.getElementById("modal-button");
var CloseModal = document.getElementsByClassName("close");
var InputEmail = document.getElementById("input-field");
var Subscribe = document.getElementById("input-button");

var Email = document.getElementsByClassName("emailInput");
var Name = document.getElementsByClassName("nameInput");
var PhoneNumber = document.getElementsByClassName("numberInput");
var SubmitButton = document.getElementById("submit-input");

var EmailField = document.getElementById("email-field");
var NameField =document.getElementById("name-field");
var NumberField = document.getElementById("number-field");


Button.addEventListener("click", (e) => {
    Modal[0].style.display = "block";
    console.log('sofie');
});

CloseModal[0].addEventListener("click", () => {
    Modal[0].style.display = "none";
});

Subscribe.addEventListener("click", (e) =>{
    sessionStorage.setItem("email", InputEmail.value);
    console.log("working");
});


// if (sessionStorage.getItem("email")){
//     var Email = JSON.parse(sessionStorage.getItem("email"));
// }
// else{
//     alert("HElp")
// }

SubmitButton.addEventListener("click", (e) =>{
    EmailField.innerHTML = Email.value(0);
    NameField.innerHTML = Name.value(1);
    NumberField.innerHTML = PhoneNumber.value(2);
    EmailField.value = "";
    NameField.value = "";
    NumberField.value = "";
});


