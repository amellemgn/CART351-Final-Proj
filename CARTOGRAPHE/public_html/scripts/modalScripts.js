$(document).ready(function() {

//code largely from W3schools modal tutorial
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

// $('#hidetitle').on('mouseover', function(){
//   title.style.display= 'block';
//   $('#hidetitle').css('background-color','rgba(255,255,255,0)');
//   console.log('IM IN IT NOW BABY');
// });
// title.mouseout(function(){
//   title.style.display = 'none';
// })
});
