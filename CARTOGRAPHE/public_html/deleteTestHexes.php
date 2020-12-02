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
