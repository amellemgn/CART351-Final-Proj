<!-- index.php - file that will host the UI (html + drawing / interacting with the tile -->



<!-- <?php
?> -->


<html>

<head>
  <title> HONEY I'M HOME </title>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <link rel="stylesheet" type="text/css" href="css/prototype.css">
  <script src="scripts/honeycomb.min.js"></script>
  <script src="scripts/svg.js"></script>
  <script src="scripts/hexObj.js"></script>
</head>

<body>
  <div id="title">
  <h1> HEX TEST </h1>
  <p>(qualitative rating scale)</p></div>

<div id="formWrapper">
  <div class="qs" id="q1">
    <p>From the ocean to the desert, where do you bury your toes</p>
    <input type="range" id="hue1" min="0" max="360" step="1" />
  </div>

  <div class="qs" id="q2">
    <p>From overcast nightmare to balmy fantasy, how did you dream</p>
    <input type="range" id="hue2" min="0" max="360" step="1"/>
  </div>

  <div class="qs" id="q3">
    <p>From Sunrise to Sunset, where does your gaze stray</p>
    <input type="range" id="xRange" min="0" max="1"step="0.1" />
  </div>

  <div class="qs" id="q4">
    <p>From somnolent dissolution to crackling alertness, how wakeful are you</p>
    <input type="range" id="yRange" min="0" max="1" step="0.1" />
  </div>

  <div class="qs" id="q5">
    <p>From still pond at dusk to cloud of flustered insects, how busy is your heart </p>
    <input type="range" id="noise" min="0" max="100" step="1" />
  </div>

  <div class="qs" id="q6">
    <p>From still pond at dusk to cloud of flustered insects, how busy is your heart </p>
    <input type="text" id="inputText" size="24" maxlength = "40" />
  </div>

  <input type="button" id="button" type="button" value="Click to Add Tile">
</div>

  <div id="container"></div>
  <div id="containerTwo"></div>

  <script src="scripts/script.js"></script>
</body>

</html>
