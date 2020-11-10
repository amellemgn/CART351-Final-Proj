//https://svgjs.com/docs/3.0/getting-started/
SVG.on(document, 'DOMContentLoaded', function() {
  //use the SVG() function to create an SVG document and add it to the html page:
const draw = SVG().addTo('#container');
// .size('100%', '20%');
const drawTwo = SVG().addTo('#containerTwo').size('100%', '100%');
// 1.  (optionally) create a Hex factory by extending the default:
const Hex = Honeycomb.extendHex({
    size: 30,           // default: 1
    orientation: 'flat' // default: 'pointy'
})

// 2.  create a Grid factory that uses the Hex factory:
const mainGrid= Grid = Honeycomb.defineGrid(Hex);

// get the corners of a hex (they're the same for all hexes created with the same Hex factory)
const corners = Hex().corners()

// an SVG symbol can be reused
const hexSymbol = draw.symbol()
    // map the corners' positions to a string and create a polygon
    .polygon(corners.map(({ x, y }) => `${x},${y}`))
    .fill('#ff0000')
    .stroke({ width: 1, color: '#999' })

// draw hexagons without the grid ...
    draw.use(hexSymbol).translate(10, 10);
    draw.use(hexSymbol).translate(55, 36);

  // render 10,000 hexes within the grid.
Grid.rectangle({width:3,height:2}).forEach(hex => {
    const { x, y } = hex.toPoint()
    // use hexSymbol and set its position for each hex
    drawTwo.use(hexSymbol).translate(x, y)

    $('#button').on('click',function(){

      const { x, y } = hex.toPoint()
      let newHex = drawTwo.use(hexSymbol).translate(x, y);
      console.log("hi");
      mainGrid.push(newHex);
    })
})

});
