$(document).ready(function() {

  let hexObjs = [];

// declaring variables to be assigned by input value
  let huevalue;
  let huevalue2;
  let tileX;
  let tileY;
  let inputText;


// determining size of container to which hexagons will be appended
  let docWidth = document.getElementById('container').clientWidth;
  let docHeight = document.getElementById('container').clientHeight;


// first get function, run when page loads
  $.ajax({
    type: "GET",
    url: "https://hybrid.concordia.ca/j_galb/CARTOGRAPHE/public_html/getWholePage.php",
    data: 'json',
    processData: false, //prevents from converting into a query string
    contentType: false,
    cache: false,
    timeout: 600000,
    success: function(initialResponse) {

      document.getElementById("inputText").value = "";


      let firstJSON = JSON.parse(initialResponse);
      console.log("INITIAL");
      console.log(firstJSON);

      //display the hexagonal tiles according to the x,y coordinates determined by input
      displayHexes(firstJSON);
      // hexGrid(firstJSON);

//click function to rearrange the tiles according to first colour
      $('#color1').on('click', function() {
        firstJSON.sort(function(a, b) {
          return a.color1 - b.color1;
        });
        hexGrid(firstJSON);
        mouseLocate(firstJSON);

      });

  //same function as above, rearranges tiles according to second colour
      $('#color2').on('click', function() {
        firstJSON.sort(function(a, b) {
          return a.color2 - b.color2;
        });
        hexGrid(firstJSON);
        mouseLocate(firstJSON);

      });

//resets the default arrangement of the tiles
      $('#scatter').on('click', function() {
        displayHexes(firstJSON);
        mouseLocate(firstJSON);

      });

      mouseLocate(firstJSON);

    },
    error: function() {
      console.log("error occurred");

    }
  });

  $("#hexForm").submit(function(event) {
    event.preventDefault();

  //input form, data to be sent to database and displayed as a hexagon simultaneously
    let form = $('#hexForm')[0];
    let data = new FormData(form);

  // function executed upon form submission
    $.ajax({
      type: "POST",
      enctype: 'form-data',
      url: "https://hybrid.concordia.ca/j_galb/CARTOGRAPHE/public_html/index.php",
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


        $('#hexForm')[0].reset();
      },
      error: function() {
        console.log("error occurred");

      }
    });
  });

  function displayLastHex(response) {

//variables assigned to values from database
//only the last tile added is retrieved from the database
    index = response.length - 1;
    huevalue = response[index].color1;
    huevalue2 = response[index].color2;
    xRange = response[index].xPos;
    yRange = response[index].yPos;
    inputText = response[index].userText;
    count = response[index].userID;

// decimal range from slider is multiplied by container size to determine tile position
    tileX = (xRange * docWidth) - 100;
    tileY = yRange * (docHeight) - 100;

//new hexagonal object is created
    let newHex = new HexObj(50, 50, huevalue, huevalue2, inputText, count);
    hexObjs.push(newHex);
//positioning with css
    $('#' + count).css({
      'margin-left': tileX,
      'margin-top': tileY
    });
    newHex.display();
    newHex.appendGradient();
  }

  function displayHexes(response) {
//container is emptied to prevent errors when rearranging tiles
    $("#container").empty();

//similar function to above, only all entries in the database are included
    for (i = 0; i < response.length; i++) {

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

//floats message from text input area over a given tile on click
  function mouseLocate(hexObjs) {


    for (i = 0; i < hexObjs.length; i++) {

//database entries have an id separate from their array index
      let hexId = hexObjs[i].userID;
      let obj = hexObjs[i];

//gets position of tile in order to assign it to text box later on
      let objPosX = $('#' + hexId).css('margin-left');
      let objPosY = $('#' + hexId).css('margin-top');

      //  console.log(objPosY);

//text is retrieved from database
      let words = hexObjs[i].userText;

      $('#' + hexId).on('click', function() {
        //removes any messages that may already have been open
        $('.displayInput').remove();

//creation of div to contain text
        let textContainer = $("<div>").attr("id", i).addClass('displayInput').text(words);
        //the text box is positioned at the same place as its corresponding tile

        textContainer.css({
          'margin-top': objPosY,
          'margin-left': objPosX
        });
        textContainer.appendTo('#container');

        textContainer.on('click', function() {
      //text boxes can also be removed by clicking directly on them
          console.log("hey");
          this.remove();
        });
      });
    }
  }

//rearranges hesagons into an ordered grid
  function hexGrid(response) {
    $("#container").empty();

    let count = 0;

    for (i = 0; i < response.length; i++) {

      huevalue = response[i].color1;
      huevalue2 = response[i].color2;
      inputText = response[i].userText;
      count++;


//determines spacing for hexagons
      let xMargin = 225;
      let yMargin = xMargin / 2;
      let xOffset = 75;
      let h = Math.floor(Math.sqrt(3) * 50);
      let yOffset = 50;
      let mod = 16;

      let divisor = Math.floor(count / mod) * h;
  //hexagons are placed in a single row until the 'mod' is reached, whereupon they appear in a new row
      xPos = (count % mod) * xOffset + xMargin;
      yPos = yOffset + (count % 2) * h / 2 + divisor + yMargin;

//tiles are created, colour retrieved from database, and positioned according to their place in array
      let newHex = new HexObj(50, 50, huevalue, huevalue2, inputText, count);
      $('#' + count).css({
        'margin-left': xPos,
        'margin-top': yPos
      });

      newHex.display();
      newHex.appendGradient();
    }

  }


});
