<!-- index.php - file that will host the UI (html + drawing / interacting with the tile -->



<!-- <?php
?> -->


<html>
<head>
  <title> Project Prototype </title>
<!-- REFERENCE OUR SCRIPTS -->


<script type="text/javascript" src="js/script.js"></script>
<script type="text/javascript" src="js/tile.js"></script>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<link rel="stylesheet" type="text/css" href="css/style.css">


</head>
<body>

  <div class="wrapper">
<!-- everything in the slider 'column' to the left of screen is in sliderContainer -->
    <div class="sliderContainer">
      <h3> Rate x and y values: </h3>
      <div class = "sliderColor">
      <label for="sliderColor"> Color </label>
     <input type="range" min="1" max="50" value="25" class="slider" id="Color">
     <output for="slideColor" id="colorOut">25</output>
     </div>
   </div>
<!-- the map and tiles are in a column in the center of screen called the mapContainer -->
    <div class = "mapContainer" id = "mapContainer">
      <h3> Locate urself </h3>
      <div id = "map"></div>
    </div>
<!-- links and stuff are in the rightmost column called linksContainer -->
    <div class="linksContainer" id="linksContainer">
      <h3> about </h3>
      <h3> links </h3>
    </div>
  </div>
</body>
</html>
