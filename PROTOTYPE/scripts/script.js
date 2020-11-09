// script.js will host js components, including slider code
window.onload = function() {


  let newTile = new Tile(100, 0, 60, 1);
  newTile.display();

  // let anotherTile = new Tile(200, 0, 60, 1);
  // console.log(anotherTile);
  // let anothwidth = anotherTile.attr('width');
  // let height= anotherTile.height();
  // console.log(anothwidth);
  // anotherTile.move(width/2,height/2);

  //adding an event listener to the UI slider to register input
  document.querySelector("#sliderColor").addEventListener("input", newTile.outputColorUpdate);
  document.querySelector("#sliderColor").addEventListener("input", newTile.outputColorUpdate);

}
