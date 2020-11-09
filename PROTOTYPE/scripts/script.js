// script.js will host js components, including slider code
window.onload = function(){


  let newTile = new Tile(100,0,60,1);
  newTile.display();

  let anotherTile = new Tile(200,0,60,1);
  console.log(anotherTile);
  let anothwidth = anotherTile.attr('width');
  // let height= anotherTile.height();
  console.log(anothwidth);
  // anotherTile.move(width/2,height/2);

//adding an event listener to the UI slider to register input
  document.querySelector("#sliderColor").addEventListener("input",outputColorUpdate);

//callback for slider
function outputColorUpdate(){
  document.querySelector("#colorOut").value = this.value;

}
//this is from Sabine's files - trying to adapt to our proj
  function outputColorUpdate() {
  	document.querySelector('#colorOut').value = this.value;
    for(let i =0; i<movingShapes.shapeList.length; i++){
      newTile.a = this.value/100;
      movingShapes.shapeList[i].box.style.background = "rgba("+movingShapes.shapeList[i].r+","+movingShapes.shapeList[i].g+","+movingShapes.shapeList[i].b+","+movingShapes.shapeList[i].a+")";
      movingShapes.shapeList[i].letterC.style.color = "rgba(255,255,255,"+movingShapes.shapeList[i].a+")";

    }
}

}
