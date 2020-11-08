// script.js will host js components, including slider code
window.onload = function(){

  // let newTile = new Tile(parameters go here);

  document.querySelector("#sliderColor").addEventListener("input",outputColorUpdate);
//this is from Sabine's files - trying to adapt to our proj
  function outputAlphaUpdate() {
  	document.querySelector('#colorOut').value = this.value;
    for(let i =0; i<movingShapes.shapeList.length; i++){
      movingShapes.shapeList[i].a = this.value/100;
      movingShapes.shapeList[i].box.style.background = "rgba("+movingShapes.shapeList[i].r+","+movingShapes.shapeList[i].g+","+movingShapes.shapeList[i].b+","+movingShapes.shapeList[i].a+")";
      movingShapes.shapeList[i].letterC.style.color = "rgba(255,255,255,"+movingShapes.shapeList[i].a+")";

    }
}
