// tile.js will host the tile class


// function Tile(image, r, g, b, a){

function Tile(r, g, b, a){
  // this.image = image;
  // this.box.classList.add("box");

  this.r =r;
  this.g =g;
  this.b=b;
  this.a=a;
  

//using https://svgjs.com/docs/3.0/shape-elements/#svg-polygon
  this.display = function(){
    let draw = SVG().addTo('body').size(300, 300);

    let hex = draw.polygon("49.43 41.28 24.97 54.85 0.5 41.28 0.5 14.14 24.97 0.57 49.43 14.14 49.43 41.28");

    function appendGradient(){
      draw.append('<svg id="gradientdef"><defs><linearGradient id = "gradient 1"<stop class="stop1" offset="0%" style="stop-color:white/> <stop class="stop2" offset="50%" style="stop-color:blue/> /> </linearGradient></defs></svg>');
      hex.attr("fill", "url(#gradient1)");
    };
    // hex.fill("rgba("+this.r+","+this.g+","+this.b+","+this.a+")");

    function appendText() {
  var txt1 = "<p>Text.</p>";               // Create element with HTML
  var txt2 = $("<p></p>").text("Text.");   // Create with jQuery
  var txt3 = document.createElement("p");  // Create with DOM
  txt3.innerHTML = "Text.";
  $("body").append(txt1, txt2, txt3);      // Append the new elements
}

    let map = $("#map").append(hex);
  }

  this.colorUpdate = function(){
    document.querySelector('#colorOut').value = this.value;
    hex.fill("rgba(149,0,"+this.value+")");

  // want to use their radial gradient from here: https://www.w3schools.com/graphics/canvas_gradients.asp but without canvas :( so we can use a canvas_gradient
  // that connects two color inputs
  }



}
