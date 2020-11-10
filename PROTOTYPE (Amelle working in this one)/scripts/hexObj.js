//hexObj takes three parameters. calculating each point's x, y coordinates using coordinates.
// finding center of circles, calculating each x, y point

function HexObj(centerX,centerY, huevalue, huevalue2){

this.positions = [];
this.centerX = centerX;
this.centerY = centerY;
this.huevalue = huevalue;
this.huevalue2 = huevalue2;
this.lineLength = 50;
this.draw = SVG().addTo('body').size(300, 300);
this.hex = null;
this.colA =0;
this.colB = "#FFFFFF";
let self = this;


const NUM_SIDES = 6;
//make an array of positions
//calculating six positions - dynamically.
for(let i=0; i<NUM_SIDES; i++)
{
  //returns hex values in an array.
  this.positions.push(new PosVector(
    flat_hex_cornerX(this.centerX, this.lineLength, i),
    flat_hex_cornerY(this.centerY, this.lineLength, i)
                              ));
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

}//end class

/** HELPER **/
  // to calculate an xpos
  //helper functions - calculte x and y at a given angle. each point is 60 degrees apart.
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
