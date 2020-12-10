<?php
require('createHexDB.php');

try
{
  $sql_delete="DELETE FROM userHexes";
      $hex_db ->exec($sql_delete);
      echo ("DELETION OF entry in hex collection successful");

 }
  catch(PDOException $e) {
     // Print PDOException message
      echo $e->getMessage();
    }
?>

<!-- page deletes all hexagons from database - made mostly so that we could clear our test tiles -->
