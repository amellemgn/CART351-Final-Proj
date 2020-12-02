SVG.on(document, 'DOMContentLoaded', function() {

  // const draw = SVG().addTo('#container').size('100%', '100%');

  //use the SVG() function to create an SVG document and add it to the html page:
  // an SVG symbol can be reused

  let hexObjs = [];


  let huevalue;
  let huevalue2;
  let tileX;
  let tileY;
  // $('#hue').change(getHueValue);
  $('#button').on('click', newOnClick);

  let count = 0;

  function newOnClick() {
    // .id(this.hexID).addClass("hex");

    console.log("hi");
    //creating new hex object on button press - storing in empty variable to
    //stash in an array
    count++;

    console.log(count);

    huevalue = document.getElementById("hue1").value;
    huevalue2 = document.getElementById("hue2").value;
    console.log(huevalue, huevalue2);

    //problem with this line
    // $(draw).append('<svg id="gradientdef"><defs><linearGradient id = "gradient 1"<stop class="stop1" offset="0%" style="stop-color:hsl('+huevalue+',100%,70%)/> <stop class="stop2" offset="50%" style="stop-color:hsl('+huevalue2+',100%,70%)/> /> </linearGradient></defs></svg>');
    //

    let xRange = document.getElementById("xRange").value;
    let yRange = document.getElementById("yRange").value;

    let docWidth = document.getElementById('container').clientWidth;
    let docHeight = document.getElementById('container').clientHeight;

    let inputText = document.getElementById("inputText").value;
    // console.log(inputText);

    tileX = xRange * docWidth;
    tileY = xRange * docHeight;

    //we can make this more complex eventually
    let newHex = new HexObj(50, 50, huevalue, huevalue2, inputText, count);
    hexObjs.push(newHex);

    $('#' + count).css({
      'margin-left': tileX,
      'margin-top': tileY
    });
    // document.getElementById(count).style.top=tileY;
    newHex.display();

    newHex.appendGradient();
    // newHex.appendText();
    // console.log("input text" + newHex.inputText);
    // end of newOnClick function
    mouseLocate();
  }

  function mouseLocate() {

    for (i = 0; i < hexObjs.length; i++) {
      let hexId = hexObjs[i].hexID;
      let obj = hexObjs[i];

      let objPosX = $('#'+hexId).css('margin-left');
      let objPosY = $('#'+hexId).css('margin-top');

      let words = hexObjs[i].inputText;

      $('#'+hexId).on('click', function () {
        let textContainer = $("<div>").attr("id", i).addClass('displayInput').text(words);
        textContainer.css({'margin-top': objPosY, 'margin-left': objPosX});
        textContainer.appendTo('#container');

      textContainer.on('click', function() {
          console.log("hey");
          this.remove();
        });
      });
    }
  }


});
