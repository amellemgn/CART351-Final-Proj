<!-- index.php - file that will host the UI (html + drawing / interacting with the tile -->



<!-- <?php
?> -->


<html>
<head>
  <title> Project Prototype </title>
<!-- REFERENCE OUR SCRIPTS -->


<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script type="text/javascript" src="/scripts/svg.min.js"></script>
<link rel="stylesheet" type="text/css" href="css/prototype.css">

<script type="text/javascript" src="scripts/tile.js"></script>
<script type="text/javascript" src="scripts/script.js"></script>


</head>
<body>

  <div class="wrapper">
<!-- everything in the slider 'column' to the left of screen is in sliderContainer -->
    <div class="inputContainer">
      <h3> Change Hex Values: </h3>
      <div class = "sliderColor">
        <label for="sliderColor"> Primary Color </label>
        <input type="range" min="1" max="255" value="25" class="slider" id="Color">
        <output for="slideColor" id="colorOut">25</output>
      </div>
      <div class = "sliderColor2">
        <label for="sliderColor2"> Secondary Color </label>
        <input type="range" min="1" max="50" value="25" class="slider" id="Color2">
        <output for="slideColor2" id="colorOut2">25</output>
      </div>
      <div class = "sliderNoise">
        <label for="sliderNoise"> Noise </label>
        <input type="range" min="1" max="50" value="25" class="slider" id="Noise">
        <output for="slideNoise" id="NoiseOut">25</output>
      </div>
      <p><label> Text input: </label><input type = "text" size="24" maxlength = "40"  name = "text_input" required></p>
      <p><input type = "submit" name = "submit" value = "send" id =buttonS /></p>
   </div>
<!-- the map and tiles are in a column in the center of screen called the mapContainer -->
    <div class = "mapContainer" id = "mapContainer">
      <h3> Locate urself </h3>
      <div id = "map">
      </div>
    </div>
<!-- links and stuff are in the rightmost column called linksContainer -->
    <div class="linksContainer" id="linksContainer">
      <h3> about </h3>
      <h3> links </h3>
    </div>
  </div>
</body>
</html>
