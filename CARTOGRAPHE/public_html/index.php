<?php
      require('createHexDB.php');


      if($_SERVER['REQUEST_METHOD'] == 'POST'){

        try{
        $hue1 = $_POST['hue1'];
        $hue2 = $_POST['hue2'];
        $xVal = $_POST['xRange'];
        $yVal = $_POST['yRange'];
        $text = $_POST['userWords'];


      $hue1_clean = $hex_db->quote($hue1);
      $hue2_clean = $hex_db->quote($hue2);
      $xVal_clean = $hex_db->quote($xVal);
      $yVal_clean = $hex_db->quote($yVal);
      $text_clean = $hex_db->quote($text);

      $queryInsert = "INSERT INTO userHexes(color1,color2,xPos,yPos,userText) VALUES ($hue1_clean,$hue2_clean,$xVal_clean,$yVal_clean,$text_clean)";
      $hex_db-> exec($queryInsert);

      $querySelect='SELECT * FROM userHexes';
      $result = $hex_db->query($querySelect);
     if (!$result) die("Cannot execute query.");

     $allHexes = array();
     $i=0;
     while($row = $result->fetch(PDO::FETCH_ASSOC))
      {
        $allHexes[$i] = $row;
        $i++;
   }

   $myJSONObj = json_encode($allHexes);
   echo $myJSONObj;

      $hex_db = null;

    } //end try
     catch(PDOException $e) {
       // Print PDOException message
       echo $e->getMessage();

     }
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
  <script nomodule src="scripts/index.js"></script>

  <script src="scripts/hexObj.js"></script>
  <script src='scripts/modalScripts.js'>  </script>


  <style>
  </style>
</head>

<body>
  <!-- div hidden until hovered over, contains button opening input form -->
  <div id='hidetitle'>
  <div id="title">
  <h1 id='firstTitle'> CARTOGRAPH-E: a collective emotional map.</h1>
    At any time, click on any of the tiles to view their message.
  <div id='openModal'>Locate Yourself on the Map</div>
</div></div>

<!-- buttons offering different options for spatial sorting of hexagonal tiles -->
  <div id='sortOptions'>
  <button type="button" class='sortbuttons'id='color1' >SORT BY PHYSIOLOGICAL STATE</button></br>
  <button type="button" class='sortbuttons'id='color2'>SORT BY MENTAL STATE</button></br>
  <button type="button" class='sortbuttons'id='scatter'>RESET SPATIAL VIEW</button></div>

<!-- input form, containing input sliders and text field -->
<div id='modal'>
<div id="formWrapper">
  <form id='hexForm'  action="" enctype ="form-data">
  <fieldset>
  <div class="qs" id="q1">
    <p>Are your thoughts crisp and bright, or foggy and turbulent?</p>
    <input type="range" id="hue1" name ='hue1' min="0" max="255" step="1" />
  </div>

  <div class="qs" id="q2">
    <p>Is your heart steady and serene or flushed and pounding?</p>
    <input type="range" id="hue2" name ='hue2' min="0" max="255" step="1"/>
  </div>

  <div class="qs" id="q3">
    <p>How far into the future do you trust yourself to look? A moment or a lifetime forwards?</p>
    <input type="range" id="xRange" name='xRange' min="0" max="1"step="0.01" />
  </div>

  <div class="qs" id="q4">
    <p>Do you imagine your spirit cast high among the clouds, or burrowing below the earth?</p>
    <input type="range" id="yRange" name='yRange' min="0" max="1" step="0.01" />
  </div>

  <div class="qs" id="q6">
    <p>Describe, represent, or articulate your mood. What causes, internal or external, have contributed?</p>
    <input type="text" id="inputText" name='userWords' size="24" maxlength = "10000" value="I am here"/>
  </div>

  <input type="submit" id="button" value="Click to Be Located">

  <fieldset>
  </form>
</div>
</div>

<!-- container consituting the main area of the 'map' page -->
  <div id="container"></div>
  <!-- <div id="containerTwo"></div> -->

  <script src="scripts/ajaxPost0.js"></script>
</body>

</html>
