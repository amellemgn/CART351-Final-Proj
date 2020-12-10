$(document).ready(function() {

//code largely from W3schools modal tutorial
//opens form on button click ; form is otherwise invisible

let modal = document.getElementById("modal");
let formContainer = document.getElementById("formWrapper");
let title = document.getElementById("title");
var btn = document.getElementById("openModal");
var close = document.getElementById("button");

btn.onclick = function() {
  modal.style.display = "block";
  formContainer.style.display ="block";
  // title.style.display ='none';
}
close.onclick = function() {
  modal.style.display = "none";
  // title.style.display ='block';

}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    // title.style.display ='block';

  }
}

});
