// tile.js will host the tile class

function Tile(image, r, g, b, a){
  this.image = image;
  this.box.classList.add("box");

  this.r =r;
  this.g =g;
  this.b=b;
  this.a=a;

  this.box.style.background = "rgba("+this.r+","+this.g+","+this.b+","+this.a+")";
  document.getElementById("map").appendChild(this.box);
}
