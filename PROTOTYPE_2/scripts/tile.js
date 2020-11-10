// tile.js will host the tile class


// function Tile(image, r, g, b, a){

function Tile(r, g, b, a){
  // this.image = image;
  // this.box.classList.add("box");



  this.r =r;
  this.g =g;
  this.b=b;
  this.a=a;
  this.hex =null;
  this.hexArray=[];

//using https://svgjs.com/docs/3.0/shape-elements/#svg-polygon
  this.display = function(){
    let draw = SVG().addTo('body').size(300, 300);

     this.hex = draw.polygon("49.43 41.28 24.97 54.85 0.5 41.28 0.5 14.14 24.97 0.57 49.43 14.14 49.43 41.28");
    this.hex.fill("rgba("+this.r+","+this.g+","+this.b+","+this.a+")");

    $('this.hex').addClass('singleTile');
    this.hexArray.push(this.hex);

    $('this.hexArray').appendTo("#map");
  }
  this.move = function(inX,inY){
    console.log("testing the move");
    this.hex.translate(inX,inY);
  }




}
