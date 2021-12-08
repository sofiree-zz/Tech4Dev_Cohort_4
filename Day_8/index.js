var Modal = document.getElementsByClassName("modal")
var Button = document.getElementById("modal-button");
var CloseModal = document.getElementsByClassName("close");
var InputEmail = document.getElementById("input-field");
var Subscribe = document.getElementById("input-button");


Button.addEventListener("click", (e) => {
    Modal[0].style.display = "block";
    console.log('sofie');
});

CloseModal[0].addEventListener("click", () => {
    Modal[0].style.display = "none";
});

Subscribe.addEventListener("click", (e) => {
    sessionStorage.setItem("email", InputEmail.value);
    console.log("working");
});