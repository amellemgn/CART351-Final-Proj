<!DOCTYPE html>
<head>
<title> test page</title>
<link rel='stylesheet' type='text/css' href='css/usercss.css'>
</head>

<body>
<!-- page displays all entries in database in plain text -->
<?php
require('createHexDB.php');

try {
  $sql_select='SELECT * FROM userHexes';

  $result = $hex_db->query($sql_select);
  if (!$result) die("Cannot execute query.");

  echo "<h3 id='userHead'> CURRENT USERS </h3>";
  echo"<div id='back'>";

  while($row = $result->fetch(PDO::FETCH_ASSOC))
  {
     echo "<div class ='outer'>";
     echo "<div class ='content'>";

     foreach ($row as $key=>$entry)
     {
        if($key!="image")
        {
            echo "<p>".$key." : ".$entry."</p>";
        }
     }

      echo "</div>";
      echo "</div>";
  }
  echo"</div>";

}
catch(PDOException $e) {

    echo $e->getMessage();
  }

?>
</body>
</html>
