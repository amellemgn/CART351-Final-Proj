function HexObj(centerX,centerY, lineLength,id,textMessage,cssX,cssY){

this.positions = [];
this.centerX = centerX;
this.centerY = centerY;
this.lineLength = lineLength;
this.r = 0;
this.g =0;
this.b=0;
this.a=1;
this.hexID =id;
this.colA =255;
let self =this;
this.draw = SVG().addTo('#container').size('100px', '100px').id(this.hexID).addClass("hex");
this.svgElement = this.draw.node;
this.posX = 0;
this.posY =0;


this.textMessage = textMessage;
this.textContainerHex =document.createElement("div");
document.getElementById("container").appendChild(this.textContainerHex);

//console.log(this.textContainerHex);


const NUM_SIDES = 6;
//make an array of positions
for(let i=0; i<NUM_SIDES; i++)
{
  this.positions.push(new PosVector(
    flat_hex_cornerX(this.centerX, this.lineLength, i),
    flat_hex_cornerY(this.centerY, this.lineLength, i)
                              ));
}

this.positionText = function(){

  this.textContainerHex.style.left = this.posX+"px";
  this.textContainerHex.style.top = this.posY+"px";
}

this.setText = function(){
  //this.textContainerHex = document.createElement("div");
  this.textContainerHex.classList.add("text");
  this.textContainerHex.classList.add("textOff");
  this.textContainerHex.innerHTML = this.textMessage;
}

this.display = function(){
  this.hexSymbol = this.draw.symbol()
    // map the corners' positions to a string and create a polygon
    .polygon(this.positions.map(({ x, y }) => `${x},${y}`))
     .fill('#ff0000')
    .stroke({ width: 1, color: '#999' })
    this.draw.use(this.hexSymbol)
    this.setText();
      // add event listener...
      this.svgElement.addEventListener('mouseover',function(){
        //console.log("over");
        //console.log(self.textContainerHex);
        self.textContainerHex.classList.remove("textOff");
        self.textContainerHex.classList.add("textOn");

      });

      this.svgElement.addEventListener('mouseout',function(){
      //  console.log("off");
       self.textContainerHex.classList.remove("textOn");
       self.textContainerHex.classList.add("textOff");

      });
}

this.setSVGPosition =function(inX,inY){
  this.posX = inX;
  this.posY =inY;

  this.svgElement.style.left = this.posX+"px";
  this.svgElement.style.top = this.posY+"px";

}






  this.appendGradient = function(){

    let gradient = this.draw.gradient('linear', function(add) {
      add.stop(0, "#ffffff");
      console.log(parseInt(self.colA));
      let hexVal = rgbToHex(parseInt(self.colA),self.g,self.b);
      console.log(hexVal);
      add.stop(1,hexVal);
    })
  //  this.draw.append('<svg id="gradientdef"><defs><linearGradient id = "gradient 1"<stop class="stop1" offset="0%" style="stop-color:white/> <stop class="stop2" offset="50%" style="stop-color:blue/> /> </linearGradient></defs></svg>');
    this.hexSymbol.attr({fill:gradient});
  }
  // do initial config

  this.setSVGPosition(cssX,cssY);
  this.positionText();


}//end class

/** HELPER **/
  // to calculate an xpos
    function flat_hex_cornerX(cx, size, i){
        let angle_deg = 60 * i;
        // convert to radians
        let angle_rad = Math.PI / 180 * angle_deg;
        return (cx + size * Math.cos(angle_rad))

      }
  // to calculate a ypos
      function flat_hex_cornerY(cy, size, i){
        let angle_deg = 60 * i;
        // convert to radians
        let angle_rad = Math.PI / 180 * angle_deg;
        return (cy + size * Math.sin(angle_rad))

      }
function PosVector(x,y){
    this.x = x;
    this.y = y;
  }

  function componentToHex(c) {
    let hexValTest = c.toString(16);
    return hexValTest.length == 1 ? "0" + hexValTest : hexValTest;
  }

  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
