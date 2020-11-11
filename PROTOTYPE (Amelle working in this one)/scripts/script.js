SVG.on(document, 'DOMContentLoaded', function() {
  //use the SVG() function to create an SVG document and add it to the html page:
 const draw = SVG().addTo('#container').size('100%', '100%');
// an SVG symbol can be reused

//HexObj takes three parameters - center X, center Y, line length
//instances of hexObj class - calculating position
let hexobjA = new HexObj(125,93, 0, 0, draw);
let hexobjB = new HexObj(50,50, 0, 0, draw);
hexobjA.display();


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
    let huevalue2;
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
      huevalue2 = document.getElementById("hue2").value;
      console.log(huevalue, huevalue2);

//problem with this line
      // $(draw).append('<svg id="gradientdef"><defs><linearGradient id = "gradient 1"<stop class="stop1" offset="0%" style="stop-color:hsl('+huevalue+',100%,70%)/> <stop class="stop2" offset="50%" style="stop-color:hsl('+huevalue2+',100%,70%)/> /> </linearGradient></defs></svg>');
      //

    let  xRange = document.getElementById("xRange").value;
    let  yRange = document.getElementById("yRange").value;

    let docWidth = document.getElementById('container').clientWidth;
    let docHeight = document.getElementById('container').clientHeight;

    let inputText = document.getElementById("inputText").value;

    tileX = xRange*docWidth;
    tileY = xRange*docHeight;

      console.log(tileX,tileY,huevalue,huevalue2);
      //we can make this more complex eventually
      let newHex = new HexObj(tileX,tileY, huevalue, huevalue2, draw);
      hexObjs.push(newHex);
      newHex.display();
      newHex.appendGradient();
      console.log(newHex.lineLength);



// dont know if its the right place for it...
   //    let newHexSymbol = draw.symbol()
   //    .polygon(newHex.positions.map(({ x, y }) => `${x},${y}`))
   //     .fill('hsl('+huevalue+',100%,70%)')
   //     .innerHTML(inputText);
   //    .stroke({ width: 1, color: '#999' })
   //   draw.use(newHexSymbol);
    }

  // function addGradient(){
  //    draw.append('<svg id="gradientdef"><defs><linearGradient id = "gradient 1"<stop class="stop1" offset="0%" style="stop-color:'hsl('+huevalue+',100%,70%)'/> <stop class="stop2" offset="50%" style="hsl('+huevalue2+',100%,70%)/> /> </linearGradient></defs></svg>');
  //    hex.attr("fill", "url(#gradient1)");
  //  };
//
// function getHueValue(e){
//   value = document.getElementById("hue1").value;
// }

});
