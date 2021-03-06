//https://svgjs.com/docs/3.0/getting-started/
SVG.on(document, 'DOMContentLoaded', function() {
  //use the SVG() function to create an SVG document and add it to the html page:
const draw = SVG().addTo('#container').size('100%', '100%');
// an SVG symbol can be reused

//HexObj takes three parameters - center X, center Y, line length
//instances of hexObj class - calculating position
let hexobjA = new HexObj(125,93);
let hexobjB = new HexObj(50,50);

let hexObjs = [hexobjA, hexobjB];

// // representative of the svg itself.
// // showing seperation between having an array of points and then drawing them.
//   const hexSymbol = draw.symbol()
//   // map the corners' positions to a string and create a polygon
//   //polyon function requires a string.
//   // .map basically takes the array of x, y positions and converts it into a string of values.
//   // basically converting for the svg format.
//   .polygon(hexobjA.positions.map(({ x, y }) => `${x},${y}`))
//    .fill('#ff0000')
//   .stroke({ width: 1, color: '#999' })
//     draw.use(hexSymbol);
//     //draw.use(hexSymbol).translate(50, 10);
//
//
//     const hexSymbolTwo = draw.symbol()
//       // map the corners' positions to a string and create a polygon
//       .polygon(hexobjB.positions.map(({ x, y }) => `${x},${y}`))
//        .fill('#000000')
//       .stroke({ width: 1, color: '#999' })
//      draw.use(hexSymbolTwo);
        //draw.use(hexSymbol).translate(50, 10);
    let huevalue;
    let tileX;
    let tileY;
    // $('#hue').change(getHueValue);
    $('#button').on('click',newOnClick);

    let count = 0;
    function newOnClick(){
      console.log("hi");
      //creating new hex object on button press - storing in empty variable to
      //stash in an array
      count ++;

      console.log(count);


      huevalue = document.getElementById("hue1").value;
      console.log(huevalue);

    let  xRange = document.getElementById("xRange").value;
    let  yRange = document.getElementById("yRange").value;

    let docWidth = document.getElementById('container').clientWidth;
    let docHeight = document.getElementById('container').clientHeight;

    tileX = xRange*docWidth;
    tileY = xRange*docHeight;

      console.log(tileX,tileY);
      //we can make this more complex eventually, or not lol
      let newHex = new HexObj(tileX,tileY);
      hexObjs.push(newHex);
      console.log(newHex.lineLength);


      let newHexSymbol = draw.symbol()
      .polygon(newHex.positions.map(({ x, y }) => `${x},${y}`))
       .fill('hsl('+huevalue+',100%,70%)')
      .stroke({ width: 1, color: '#999' })
     draw.use(newHexSymbol);
   }
//
// function getHueValue(e){
//   value = document.getElementById("hue1").value;
// }

});
