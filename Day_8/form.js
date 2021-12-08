var Email = document.getElementsByClassName("emailInput");
var Name = document.getElementsByClassName("nameInput");
var PhoneNumber = document.getElementsByClassName("numberInput");
var SubmitButton = document.getElementById("form-inputs");
// var SubmitButton = document.getElementById("submit-input");

var EmailField = document.getElementById("email-field");
var NameField = document.getElementById("name-field");
var NumberField = document.getElementById("number-field");

if (sessionStorage.getItem("email")){
    var Email = JSON.parse(sessionStorage.getItem("email"));
}
else{
    alert("HElp")
}


SubmitButton.addEventListener("submit", (e) => {

    e.preventDefault();
    console.log("Udu");

    EmailField.innerText = Email[0].value;
    NameField.innerText = Name[0].value;
    NumberField.innerText = PhoneNumber[0].value;
   
});