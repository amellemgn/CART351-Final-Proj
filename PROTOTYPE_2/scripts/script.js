// script.js will host js components, including slider code
window.onload = function() {


  let newTile = new Tile(100, 0, 60, 1);
  newTile.display();
  //works now ..


  let anotherTile = new Tile(200, 0, 60, 1);
    anotherTile.display();
    anotherTile.move(0,20);
  // console.log(anotherTile);
  // let anothwidth = anotherTile.attr('width');
  // let height= anotherTile.height();
  // console.log(anothwidth);
  // anotherTile.move(width/2,height/2);

  //adding an event listener to the UI slider to register input
  document.querySelector("#color").addEventListener("input", outputColorUpdate);
//  document.querySelector("#sliderColor").addEventListener("input", newTile.outputColorUpdate);

function outputColorUpdate(){
console.log(this.value);
//  document.querySelector('#colorOut').value = this.value;
//just changing new tile ...
  newTile.hex.fill("rgba(149,0,"+this.value+")");

// want to use their radial gradient from here: https://www.w3schools.com/graphics/canvas_gradients.asp but without canvas :( so we can use a canvas_gradient
// that connects two color inputs
}


}
