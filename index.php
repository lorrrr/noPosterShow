<?php
  if(isset($_POST['colors'])) {

          $myfile = fopen("type.txt", "a") or die("Unable to open file!");
          $newData = $_POST["colors"];
          $newData1 = $_POST['range'];

          fwrite($myfile, $newData1." ");
          fwrite($myfile, $newData."\n");

          fclose($myfile);
          unset($_POST);

      header('location:index.php');
}
    ?>
<!doctype html>
<html lang="en">
<head>

  <meta charset="utf-8">

    <meta Http-Equiv="Cache" content="no-cache">
    <meta Http-Equiv="Pragma-Control" content="no-cache">
    <meta Http-Equiv="Cache-directive" Content="no-cache">
    <meta Http-Equiv="Pragma-directive" Content="no-cache">
    <meta Http-Equiv="Cache-Control" Content="no-cache">
    <meta Http-Equiv="Pragma" Content="no-cache">
    <meta Http-Equiv="Expires" Content="0">
    <meta Http-Equiv="Pragma-directive: no-cache">
    <meta Http-Equiv="Cache-directive: no-cache">

        <meta http-equiv="expires" content="Sun, 30 Sep 2018 21:30:00 GMT" />
    <meta name="viewport" content="width=device-width, initial-scale=0.8, user-scalable=no"/>

  <title>No Poster Show</title>
  <!--Style -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

 <link rel="stylesheet" type="text/css" href="styles.css">
  <link rel="stylesheet" href="https://use.typekit.net/ltp0xeq.css">

  <!--Matter.js-->
  <script src="matter.js" type="text/javascript"></script>

  <!-- jQuery -->
  <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
  <!-- jQuery Popup Overlay -->
  <script src="https://cdn.jsdelivr.net/gh/vast-engineering/jquery-popup-overlay@2/jquery.popupoverlay.min.js">
  </script>
  <!-- p5-->
    <script src="p5.js"></script>
     <script language="javascript" type="text/javascript" src="p5.dom.js"></script>

    <script type="text/javascript" src="faceSketch.js"></script>
    <script type="text/javascript" src="sketch.js"></script>
<!-- color picker-->
 <script src="spectrum.js"></script>
 <link rel='stylesheet' href='spectrum.css' />
</head>
<body>

<!-- Popup Setup -->
  <script>
    $(document).ready(function() {
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

  <!-- popup page -->
  <div id="JPO">
    <div id="popup">


                <div id = "faceSketch" style = "display:block;padding:30px;"></div>
        <div  style = " display:inline-block;">
          <form method="POST">
               <label for="mood">How are you today?</label>
                <input type="range" min="1" max="100" value="50" class="slider" name= "range" id="myRange">
               <input type='text' id="custom" name = "colors" />
               <p></p>
               <!--input id ="mood" type="text" name="mood" value="Great!" style="color:black !important"><br>-->
               <input id= "submitButton" type="submit" value="Enter" name="Submit1">
       <button class="JPO_close" >Close</button>
          </form>

        </div>

          <script>
          $("#custom").spectrum({
              color: "#bbb",
              preferredFormat: "hex"
          });
          $("#custom").on('move.spectrum', function(e, color) {


              color.toHexString();


           });
          </script>





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
