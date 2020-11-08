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
<link rel="stylesheet" type="text/css" href="css/prototype.css">


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
      <div id = "map">
        <div id= "triangle"> </div>
        <svg id="goop"><path d="M19.58,8.47c-5.2-1.61-9.17,1.75-12.5,5.34C4,17.18,3.49,23,4.3,27.29s3.58,8.8,7.55,10.92c3.73,2,7.52.12,11.26-.72a5.69,5.69,0,0,1,5.28,1.29C30,40.21,31.58,42,31.3,44.31c-.22,1.78-.7,3.43-2.29,4.42s-3.45,1.57-4.79,3.05c-3,3.39-1.62,7.88.83,11.16,2.28,3,5.92,4.94,9.5,6,8.64,2.61,19.4,1.24,25.6-5.82a22.66,22.66,0,0,0,5.25-12c.41-3.17.37-7.1-1.55-9.83s-5.57-2.11-8-4c-1.73-1.34-1.17-3.55-.31-5.23a16.58,16.58,0,0,1,4.57-5.67c1.84-1.37,4.2-2,5.78-3.69A8.71,8.71,0,0,0,68,16.58c-.12-5.06-3.3-9.24-7.67-11.53s-10.39-3.17-14.57.1a22.53,22.53,0,0,0-4.92,5.16A34,34,0,0,0,38,16.05a6.28,6.28,0,0,1-4.21,4.07,7.47,7.47,0,0,1-5.38-.49,4.43,4.43,0,0,1-2.06-3,18.83,18.83,0,0,0-1.87-4.52A8.79,8.79,0,0,0,19.58,8.47Z" transform="translate(-3.45 -2.5)"/></svg>
      <script>
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
