<?php
try {
    $hex_db = new PDO('sqlite:../db/hexDB.db');
    $hex_db->setAttribute(PDO::ATTR_ERRMODE,
                            PDO::ERRMODE_EXCEPTION);

    $aquery = 'CREATE TABLE IF NOT EXISTS userHexes (userID INTEGER PRIMARY KEY NOT NULL, colour1 INT, colour2 INT, xPos INT, yPos INT, userText TEXT)';
    $hex_db ->exec($aquery);

                            // echo("created user login table successfully<br>");
                            //    // Close file db connection
                            //     // $new_db = null;
   }
catch(PDOException $e) {
    echo $e->getMessage();
  }

?>
