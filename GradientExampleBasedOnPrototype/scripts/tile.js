// tile.js will host the tile class


// function Tile(image, r, g, b, a){

function Tile(r, g, b, a){
  // this.image = image;
  // this.box.classList.add("box");

  this.r =r;
  this.g =g;
  this.b=b;
  this.a=a;
  this.draw = SVG().addTo('body').size(300, 300);
  this.hex = null;
  this.colA =0;
  this.colB = "#FFFFFF";
  let self = this;


//using https://svgjs.com/docs/3.0/shape-elements/#svg-polygon
  this.display = function(){


    this.hex = this.draw.polygon("49.43 41.28 24.97 54.85 0.5 41.28 0.5 14.14 24.97 0.57 49.43 14.14 49.43 41.28");

     this.hex.fill("rgba("+this.r+","+this.g+","+this.b+","+this.a+")");

    function appendText() {
  var txt1 = "<p>Text.</p>";               // Create element with HTML
  var txt2 = $("<p></p>").text("Text.");   // Create with jQuery
  var txt3 = document.createElement("p");  // Create with DOM
  txt3.innerHTML = "Text.";
  $("body").append(txt1, txt2, txt3);      // Append the new elements
}

    let map = $("#map").append(this.hex);
  }


  this.appendGradient = function(){
    console.log("here");

    let gradient = this.draw.gradient('linear', function(add) {
      add.stop(0, "#ffffff");
      console.log(parseInt(self.colA));
      let hexVal = rgbToHex(parseInt(self.colA),self.g,self.b);
      console.log(hexVal);
      add.stop(1,hexVal);
    })
  //  this.draw.append('<svg id="gradientdef"><defs><linearGradient id = "gradient 1"<stop class="stop1" offset="0%" style="stop-color:white/> <stop class="stop2" offset="50%" style="stop-color:blue/> /> </linearGradient></defs></svg>');
    this.hex.attr({fill:gradient});
  }



}

function componentToHex(c) {
  let hexValTest = c.toString(16);
  return hexValTest.length == 1 ? "0" + hexValTest : hexValTest;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

 // #0033ff
