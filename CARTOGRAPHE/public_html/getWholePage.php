<?php
      require('createHexDB.php');


        try{
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

       $firstJSONObj = json_encode($allHexes);

       echo $firstJSONObj;

          $hex_db = null;
        }
          catch(PDOException $e) {
            // Print PDOException message
            echo $e->getMessage();
          }
         exit;

  ?>

  <!-- page retrieves all entries in database -->
