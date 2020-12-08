$(document).ready(function() {

  let hexObjs = [];


  let huevalue;
  let huevalue2;
  let tileX;
  let tileY;
  let inputText;

  let gridToggle = false;
  let colorToggle = false;

  let docWidth = document.getElementById('container').clientWidth;
  let docHeight = document.getElementById('container').clientHeight;



  $.ajax({
    type: "GET",
    url: "../getWholePage.php",
    data: 'json',
    processData: false, //prevents from converting into a query string
    contentType: false,
    cache: false,
    timeout: 600000,
    success: function(initialResponse) {
      // console.log(initialResponse)
      //reponse is a STRING (not a JavaScript object -> so we need to convert)
      console.log("this is the get talking");
      // console.log(response);

      document.getElementById("inputText").value = "";

      //use the JSON .parse function to convert the JSON string into a Javascript object

      let firstJSON = JSON.parse(initialResponse);
      console.log("INITIAL");
      console.log(firstJSON);
      displayHexes(firstJSON);
     // hexGrid(firstJSON);

      $('#color1').on('click',function(){
        colorToggle = false;
    //  displayHexes(firstJSON);
      console.log("in on click:: ");
      console.log(firstJSON)
      hexGrid(firstJSON);

      });
      $('#color2').on('click',function(){
        firstJSON.sort(function(a, b){
         return a.color2-b.color2;
            });
           hexGrid(firstJSON);
      });


      $('#scatter').on('click',function(){
        displayHexes(firstJSON);
      });

      mouseLocate(firstJSON);

    },
    error: function() {
      console.log("error occurred");

    }
  });

  $("#hexForm").submit(function(event) {
    //stop submit the form, we will post it manually. PREVENT THE DEFAULT behaviour ...
    event.preventDefault();
    console.log("button clicked");
    let form = $('#hexForm')[0];
    let data = new FormData(form);

    // for (
    //   let valuePairs of data.entries()) {
    //   console.log(valuePairs[0] + ',' + valuePairs[1]);
    // }


    $.ajax({
      type: "POST",
      enctype: 'form-data',
      url: "../index.php",
      data: data,
      processData: false, //prevents from converting into a query string
      contentType: false,
      cache: false,
      timeout: 600000,
      success: function(response) {
        //reponse is a STRING (not a JavaScript object -> so we need to convert)
        console.log("we had success!");
        // console.log(response);

        document.getElementById("inputText").value = "";

        //use the JSON .parse function to convert the JSON string into a Javascript object

        let parsedJSON = JSON.parse(response);

        console.log(parsedJSON);
        displayLastHex(parsedJSON);
        mouseLocate(parsedJSON);


        //reset the form
        $('#hexForm')[0].reset();
      },
      error: function() {
        console.log("error occurred");

      }
    });
  });
    function displayLastHex(response) {

      index = response.length - 1;
      huevalue = response[index].color1;
      huevalue2 = response[index].color2;
      xRange = response[index].xPos;
      yRange = response[index].yPos;
      inputText = response[index].userText;
      count = response[index].userID;

      tileX = (xRange * docWidth)-100;
      tileY = yRange * (docHeight)-100;

      let newHex = new HexObj(50, 50, huevalue, huevalue2, inputText, count);
      hexObjs.push(newHex);

      $('#' + count).css({
        'margin-left': tileX,
        'margin-top': tileY
      });
      // document.getElementById(count).style.top=tileY;
      newHex.display();
      // hexGrid(newHex);
      newHex.appendGradient();
    }

    function displayHexes(response){
      $("#container").empty();

      for (i=0;i<response.length;i++){

      huevalue = response[i].color1;
      huevalue2 = response[i].color2;
      xRange = response[i].xPos;
      yRange = response[i].yPos;
      inputText = response[i].userText;
      count = response[i].userID;
      // console.log(count);

      tileX = xRange * docWidth;
      tileY = yRange * docHeight;

      let newHex = new HexObj(50, 50, huevalue, huevalue2, inputText, count);
      hexObjs.push(newHex);

      $('#' + count).css({
        'margin-left': tileX,
        'margin-top': tileY
      });
      newHex.display();
      newHex.appendGradient();
    }
    }

    function mouseLocate(hexObjs) {

      console.log('i am being called');

      for (i = 0; i < hexObjs.length; i++) {
        let hexId = hexObjs[i].userID;
        let obj = hexObjs[i];

        let objPosX = $('#' + hexId).css('margin-left');
        let objPosY = $('#' + hexId).css('margin-top');

      //  console.log(objPosY);

        let words = hexObjs[i].userText;

        $('#' + hexId).on('click', function() {
          let textContainer = $("<div>").attr("id", i).addClass('displayInput').text(words);
          textContainer.css({
            'margin-top': objPosY,
            'margin-left': objPosX
          });
          textContainer.appendTo('#container');

          textContainer.on('click', function() {
            console.log("hey");
            this.remove();
          });
        });
      }
    }

  function hexGrid(response){
    //>> HERE
    $("#container").empty();
  //  console.log("here");
  //  console.log(response);

  if (colorToggle === false){
    response.sort(function(a, b){
      return a.color1-b.color1;
    });
  }
      else if (colorToggle === true){
        response.sort(function(a, b){
          return a.color1-b.color1;
        });
      }
    //console.log(response);
    let count = 0;
//console.log("response length");
//console.log(response.length);
    for (i=0;i<response.length;i++){

    huevalue = response[i].color1;
    // console.log('the hue value is'+ huevalue);

    huevalue2 = response[i].color2;
    inputText = response[i].userText;
    count ++;
  //  count = response[i].userID;
  //  console.log(count);


  let xMargin = 225;
  let yMargin = xMargin/2;
  let  xOffset = 75;
  let h= Math.floor(Math.sqrt(3)*50);
  let yOffset =50;
  let mod = 16;

  let divisor = Math.floor(count/mod)*h;
  // console.log(divisor);
    xPos = (count%mod)*xOffset+xMargin;
    yPos = yOffset+(count%2)*h/2 + divisor + yMargin;

  //  let honeyCombGrid = [];

    let newHex = new HexObj(50, 50, huevalue, huevalue2, inputText, count);
    $('#' + count).css({
      'margin-left': xPos,
      'margin-top': yPos
    });

    // for(let i =0; i<response.length;i++){
    newHex.display();
     newHex.appendGradient();

    // }
}

}










  //
  // const gridContainer = document.getElementById("container");
  // let rows = document.getElementsByClassName("gridRow");
  // let cells = document.getElementsByClassName("cell")
  // drawGrid();
  // function drawGrid() {
  // console.log("drawGrid");
  //   drawRows(12);
  //   drawColumns(12);
  // }
  //
  // function drawRows(rowNum) {
  //   console.log("drawRows called");
  //   for (r = 0; r < rowNum; r++) {
  //     let row = document.createElement("div");
  //     container.appendChild(row).className = "gridRow";
  //   };
  // };
  //
  // function drawColumns(cellNum) {
  //   console.log("drawColumns called");
  //   console.log(rows.length);
  //   for (i = 0; i < 12; i++) {
  //     for (j = 0; j < cellNum; j++) {
  //       let newCell = document.createElement("div");
  //       rows[j].appendChild(newCell).className = "cell";
  //     };
  //   };
  // };

});
