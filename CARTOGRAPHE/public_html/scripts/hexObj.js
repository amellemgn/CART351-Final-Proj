//hexObj takes three parameters. calculating each point's x, y coordinates using coordinates.
// finding center of circles, calculating each x, y point

function HexObj(centerX,centerY, huevalue, huevalue2, inputText,id){

this.positions = [];
this.centerX = centerX;
this.centerY = centerY;
this.huevalue = huevalue;
this.huevalue2 = huevalue2;
this.lineLength = 50;
// this.draw = draw;
this.inputText = inputText;
this.hex = null;
this.colA =0;
this.colB = "#FFFFFF";
this.r = 0;
this.g =0;
this.b=0;
this.a=1;
this.hexID =id;
let self = this;
this.draw = SVG().addTo('#container').size('100px', '100px').id(this.hexID).addClass("hello");

// this is also used in the gradient function so we're defining
// self as an alt 'this'


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

this.display = function(){
  // this.draw = SVG().addTo('#container').size('100px', '100px').id(this.hexID).addClass("hex");
  this.hexSymbol = this.draw.symbol()
    // map the corners' positions to a string and create a polygon
    .polygon(this.positions.map(({ x, y }) => `${x},${y}`))
     // .fill('#FFFFFF')
    // .id("hexagon")
    // .stroke({ width: 1, color: '#999' })
    this.draw.use(this.hexSymbol);
      //draw.use(hexSymbol).translate(50, 10);
}


  this.appendGradient = function(){
    console.log("here");

    let gradient = this.draw.gradient('linear', function(add) {
      let translatedHue = hslToHex(huevalue, 100, 70);
      // console.log(translatedHue);

      add.stop(0, translatedHue);
      // console.log(parseInt(self.huevalue2));
      let hexVal = rgbToHex(parseInt(self.huevalue2),self.g,self.b);
      // console.log(hexVal);
      add.stop(1,hexVal);
    })
  //  this.draw.append('<svg id="gradientdef"><defs><linearGradient id = "gradient 1"<stop class="stop1" offset="0%" style="stop-color:white/> <stop class="stop2" offset="50%" style="stop-color:blue/> /> </linearGradient></defs></svg>');
    this.hexSymbol.attr({fill:gradient});
  }

 // this.appendText= function(){
 //   console.log(inputText);
 //   let newTextDiv = '<div>'+ this.inputText+ '</div>';
 //   $('#container').append(newTextDiv);
 //   $(newTextDiv).css({top: this.centerX, left: this.centerX});
 //   //uhhh this doesnt work because theyre not separate svg elements.
 //   // this.hexSymbol.hover(this.("#textFromInput").css("display","block"), $("textFromInput").css("display", "none"));
 // }

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
// translates hsl to Hex bc gradient only takes hex. Found online
  function hslToHex(h, s, l) {
  h /= 360;
  s /= 100;
  l /= 100;
  let r, g, b;
  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  const toHex = x => {
    const hex = Math.round(x * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
