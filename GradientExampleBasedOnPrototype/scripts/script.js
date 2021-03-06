// script.js will host js components, including slider code
window.onload = function() {


  let newTile = new Tile(20, 0, 0, 1);
  newTile.display();


  // let anotherTile = new Tile(200, 0, 60, 1);
  // console.log(anotherTile);
  // let anothwidth = anotherTile.attr('width');
  // let height= anotherTile.height();
  // console.log(anothwidth);
  // anotherTile.move(width/2,height/2);

  //adding an event listener to the UI slider to register input
  //document.querySelector("#sliderColor").addEventListener("input", newTile.outputColorUpdate);
  //document.querySelector("#Color").addEventListener("input", newTile.outputColorUpdate);

  //adding an event listener to the UI slider to register input
document.querySelector("#color").addEventListener("input", outputColorUpdate);
//  document.querySelector("#sliderColor").addEventListener("input", newTile.outputColorUpdate);

function outputColorUpdate(){
console.log(this.value);
newTile.colA = this.value;
newTile.appendGradient();
//  document.querySelector('#colorOut').value = this.value;
//just changing new tile ...
//newTile.hex.fill("rgba(149,0,"+this.value+")");

// want to use their radial gradient from here: https://www.w3schools.com/graphics/canvas_gradients.asp but without canvas :( so we can use a canvas_gradient
// that connects two color inputs
}

const gridContainer = document.getElementById("#mapcontainer");
let rows = getElementsByClassName("gridRow");
let cells = getElementsByClassName("cell")
function drawGrid() {
  drawRows(16);
  drawColumns(16);
}

function drawRows(rowNum) {
  console.log("drawRows called");
  for (r = 0; r < rowNum; r++) {
    let row = document.createElement("div");
    container.appendChild(row).className = "gridRow";
  };
};

function makeColumns(cellNum) {
  for (i = 0; i < rows.length; i++) {
    for (j = 0; j < cellNum; j++) {
      let newCell = document.createElement("div");
      rows[j].appendChild(newCell).className = "cell";
    };

  };
};

}
