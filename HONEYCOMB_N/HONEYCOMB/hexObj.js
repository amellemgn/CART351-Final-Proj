function HexObj(centerX,centerY, lineLength){

this.positions = [];
this.centerX = centerX;
this.centerY = centerY;
this.lineLength = lineLength;
this.draw = SVG().addTo('#container').size('300px', '300px');
this.r = 0;
this.g =0;
this.b=0;
this.a=1;
this.colA =255;
let self =this;

const NUM_SIDES = 6;
//make an array of positions
for(let i=0; i<NUM_SIDES; i++)
{
  this.positions.push(new PosVector(
    flat_hex_cornerX(this.centerX, this.lineLength, i),
    flat_hex_cornerY(this.centerY, this.lineLength, i)
                              ));
}

this.display = function(){
  this.hexSymbol = this.draw.symbol()
    // map the corners' positions to a string and create a polygon
    .polygon(this.positions.map(({ x, y }) => `${x},${y}`))
     .fill('#ff0000')
    .stroke({ width: 1, color: '#999' })
    this.draw.use(this.hexSymbol);
      //draw.use(hexSymbol).translate(50, 10);
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
