//hexObj takes three parameters. calculating each point's x, y coordinates using coordinates.
// finding center of circles, calculating each x, y point

function HexObj(centerX,centerY){

this.positions = [];
this.centerX = centerX;
this.centerY = centerY;
this.lineLength = 50;

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
