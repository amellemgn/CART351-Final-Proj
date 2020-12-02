<!-- index.php - file that will host the UI (html + drawing / interacting with the tile -->

<?php
      require('createHexDB.php');

      if($_server['REQUEST_METHOD'] == 'POST'){
        $hue1 = $_POST['hue1'];
        $hue2 = $_POST['hue2'];
        $xVal = $_POST['xRange'];
        $yVal = $_POST['yRange'];
        $text = $_POST['inputText'];


      $hue1_clean = $hex_db->quote($hue1);
      $hue2_clean = $hex_db->quote($hue2);
      $xVal_clean = $hex_db->quote($xVal);
      $yVal_clean = $hex_db->quote($yVal);
      $text_clean = $hex_db->quote($text);

      $queryInsert = "INSERT INTO userHexes(colour1,colour2,xPos,yPos,userText) VALUES ($hue1_clean,$hue2_clean,$xVal_clean,$yVal_clean,$text_clean)";
      $hex_db-> exec($queryInsert);

      $hex_db = null;
      exit;
    }
?>


<html>

<head>
  <title> HONEY I'M HOME </title>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <link rel="stylesheet" type="text/css" href="css/cartographE.css">
  <script src="scripts/honeycomb.min.js"></script>
  <script src="scripts/svg.js"></script>
  <script src="scripts/hexObj.js"></script>
  <style>
  </style>
</head>

<body>
  <div id="title">
  <h1> HEX TEST </h1>
  <p>(qualitative rating scale)</p></div>

<div id="formWrapper">
  <form id='hexForm'  action="" enctype ="multipart/form-data">
  <fieldset>
  <div class="qs" id="q1">
    <p>From the ocean to the desert, where do you bury your toes</p>
    <input type="range" id="hue1" name ='hue1' min="0" max="255" step="1" />
  </div>

  <div class="qs" id="q2">
    <p>From overcast nightmare to balmy fantasy, how did you dream</p>
    <input type="range" id="hue2" name ='hue2' min="0" max="255" step="1"/>
  </div>

  <div class="qs" id="q3">
    <p>From Sunrise to Sunset, where does your gaze stray</p>
    <input type="range" id="xRange" name='xRange' min="0" max="1"step="0.01" />
  </div>

  <div class="qs" id="q4">
    <p>From still pond at dusk to cloud of flustered insects, how busy is your heart</p>
    <input type="range" id="yRange" name='yRange' min="0" max="1" step="0.01" />
  </div>
<!--
  <div class="qs" id="q5">
    <p>From still pond at dusk to cloud of flustered insects, how busy is your heart </p>
    <input type="range" id="noise" min="0" max="100" step="1" />
  </div> -->

  <div class="qs" id="q6">
    <p>Can you put into words the character of your affective state? What causes inside or outside you have contributed to it?</p>
    <input type="text" id="inputText" name='inputText' size="24" maxlength = "10000" />
  </div>

  <input type="submit" id="button" value="Click to Add Yourself">
  <fieldset>
  </form>
</div>

  <div id="container"></div>
  <div id="containerTwo"></div>

  <script src="scripts/script.js"></script>
</body>

</html>
