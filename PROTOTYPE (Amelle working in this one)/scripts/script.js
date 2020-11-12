SVG.on(document, 'DOMContentLoaded', function() {
  let draw = SVG().addTo('#container').size('100%','100%').id("hello");

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
  mouseLocate();

if (hexObjs.length >= 1){



}

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
    console.log(inputText);

    tileX = xRange * docWidth;
    tileY = xRange * docHeight;

    console.log(tileX, tileY, huevalue, huevalue2);
    //we can make this more complex eventually
    let newHex = new HexObj(tileX, tileY, huevalue, huevalue2, inputText,count,draw);
    console.log(inputText);
    hexObjs.push(newHex);
    newHex.display();
    newHex.appendGradient();
    // newHex.appendText();
    console.log(newHex.lineLength);
   // end of newOnClick function
  document.getElementById("inputText").value = "";
  }

  function mouseLocate(){

    document.getElementById('container').onclick = function clickEvent(e) {
          // e = Mouse click event.
          var x = e.pageX - this.offsetLeft;
          var y = e.pageY - this.offsetTop;

          console.log("Left? : " + x + " ; Top? : " + y + ".");

          for (i=0;i<hexObjs.length;i++){
              let differenceX = Math.abs(hexObjs[i].tileX, x);
              let differenceY = Math.abs(hexObjs[i].tileY, y);

              console.log("we're in!")

          let textContainer = $("<div>").attr("id",i).addClass('displayInput').text(hexObjs[i].inputText);
          console.log(textContainer);
          textContainer.appendTo('#formWrapper');
          document.getElementById(i).onclick = function(){
            this.remove();
          }

          }
        }
  }


});
