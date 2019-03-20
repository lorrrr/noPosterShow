<?php

  if(isset($_POST['mood'])) {


          $myfile = fopen("type.txt", "a") or die("Unable to open file!");
          $newData = $_POST["mood"];
          fwrite($myfile, $newData ."\n");

          fclose($myfile);
          unset($_POST);

      header('location:index.php');


}
    ?>
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width= 640,initial-scale=0.5,minimum-scale=1.0,maximum-scale=1.0" />
  <title>No Poster Show</title>
  <!--Style -->
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
   <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

   <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
  <!-- p5-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.6/p5.js"></script>
   <script type="text/javascript" src="sketch.js"></script>
  <!-- jQuery -->
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
  <!-- jQuery Popup Overlay -->
  <script src="https://cdn.jsdelivr.net/gh/vast-engineering/jquery-popup-overlay@2/jquery.popupoverlay.min.js">
  </script>

  <script>
    $(document).ready(function() {
      // Initialize the plugin
      $('#JPO').popup();
      $.fn.popup.defaults.pagecontainer = '#page'
    });
  </script>


  <!-- posterpage) -->
  <div id="page">
    <header></header>
    <main>
    <button class="JPO_open">+</button>
    </main>


      <div id="sketch"></div>
  </div>

  <!-- popup -->
  <div id="JPO">
    <div id="popup">





          <form method="POST">
               <label for="mood">How are you today?</label>
               <input id ="mood" type="text" name="mood" value="Great!" style="color:black !important"><br>
               <!--input id= "button" type="submit" value="Enter" name="Submit1"-->

          </form>


    <script>
    if ( window.history.replaceState ) {
      window.history.replaceState( null, null, window.location.href );
    }
    </script>




       <button class="JPO_close" >Close</button>
     </div>

    </div>
  </div>




  <script>
  if ( window.history.replaceState ) {
    window.history.replaceState( null, null, window.location.href );
  }
  </script>




</body>
</html>
