/* THIS CODE WILL DO THE FOLLOWING
* 1: we set up the number of cols and rows in the honeyCombGrid
* 2: we then build the grid - filling it with hexObjects (definition is in hexObj.js)
* 3: hex objects are svgs (like yours ... )
* 3a: Note: gradient for all is the same
*/

window.onload = function(){


  //declare an array of shapes
  let honeyCombGrid = [];
  //declare the number of shapes we want
  const NUM_COLS=15;
  const NUM_ROWS=7;

  let yPos =10; //xOffset
  let xPos =10;//yOffset
  let size = 25;// size of a hexagon side

// standard calculation for hexagons: to determine the height.->
//https://hexnet.org/content/hexagonal-geometry
  let h =  Math.floor(Math.sqrt(3)*size);

  let w = size*1.5; //offset for shifting on x axis
  let yCounter =0;
  let yOffset =0;
  let colNum=0; //which column number are we on
  let indexC=0;//number of hexagon we are on

/* to view */
  console.log("sqrt:: "+Math.sqrt(3));
  console.log("size:: "+size);
  console.log("h:: "+h);
  console.log("w:: "+w);

/*** BUILD GRID ***/
// for each column draw a row
  for(let i=0; i< NUM_COLS;i++){
    for(let j=0; j< NUM_ROWS;j++){
      //even / odd cols...
      if(colNum%2==0){
        //for even column start with the offset
        yOffset = 0;
      }
      else {
        // for odd columns we shift the yoffset up
      yOffset = -h/2;
    }
// make a new hexagon -> center x, center y ,lineLength , id , message , xPosition of svg , yposition of svg
    honeyCombGrid.push(new HexObj(size,size,size,indexC,"text for "+indexC,xPos,yOffset+(yPos+(j*h))));
    indexC= indexC+1;
  }

    colNum = colNum+1;
    xPos=xPos+w;
}

// END build

/* display and such */
  for(let i =0; i<honeyCombGrid.length;i++){
    honeyCombGrid[i].display();
    honeyCombGrid[i].appendGradient();

  }



}
