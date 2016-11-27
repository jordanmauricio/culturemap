<!DOCTYPE html>

<?php include 'php/getGroup.php'; ?>

<html lang="en">
  <head>
  	<meta charset="UTF-8">
  	<title>Antertain Data Visualisation</title>

    <link rel="icon" href="favicon.ico" sizes="16x16 32x32" type="image/png">
    <link rel="stylesheet" href="style/style.css" />
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
    <script type="text/javascript" src="js/mouseover.js"></script>
    <script type="text/javascript" src="js/groupData.js"></script>
    <script type="text/javascript" src="js/jquery-easing-1.3.min.js"></script>
    <script type="text/javascript" src="js/smoothscroll.js"></script>   
  </head>

  <!-- Loader -->

  <body onload="load()" style="margin:0;">
    <div id="loader"></div>

    <!-- MENU -->

      <header class="mainHeader">
        <nav id="menu">
          <ul>
            <li><a href="about.html">About</a></li>
            <li><a href="vis.php">Data Visualisations</a></li>
            <li><a href="index.php">Home</a></li>

            <div class="logo">
              <a href="index.php"><img src="img/logo.svg" alt="Logo"></a>
            </div>

          </ul>
        </nav>  
      </header>


    <!-- CONTENT -->

    <div style="display:none;" id="content" class="animate-bottom">

    <div class="visExpl">
      <h1>Data Visualisation</h1>
      <p>This page displays real time data from our installation. It shows the amount of clicks and selections of each location. Once a user selects a location the information is being transferred and displayed on the website.
      The sizes of the rectangles represent the amount of clicks relative to the other locations. 
      </p>
      <h3> Click or Hover over the Logos to find out, what the Location is all about and<br> how many people have shown interest in it!</h3>
    </div>
      <div class="vis">
        
        <div class="visDetail">

          <div id="advancedAtak" class="circle">
            <img src="img/logos/atak.svg">
            <div id="dataAtak"></div>
          </div>
        
          <div id="advancedProef" class="circle">
            <img src="img/logos/proeflokaal.svg">
            <div id="dataProef"></div>            
          </div>
       
          <div id="advancedRocks" class="circle">
            <img src="img/logos/rocks.svg">
            <div id="dataRocks"></div>
          </div>
       
          <div id="advancedFriends" class="circle">
            <img src="img/logos/friends.svg">
            <div id="dataFriends"></div>
          </div>
       
          <div id="advancedBolwerk" class="circle">
            <img src="img/logos/bolwerk.svg">
            <div id="dataBolwerk"></div>
          </div>
       
          <div id="advancedConcordia" class="circle">
            <img src="img/logos/concordia.svg">
            <div id="dataConcordia"></div>
          </div>
        
          <div id="advancedWilmink" class="circle">
            <img src="img/logos/wilmink.svg">
            <div id="dataWilmink"></div>
          </div>
        
          <div id="advancedWolff" class="circle">
            <img src="img/logos/wolff.svg">
            <div id="dataWolff"></div>
          </div>
         
        </div> <!-- end visdetail -->
      </div> <!-- end vis -->

      <div id="target"><h3></h3><div class="targetExpl"><h2></h2><p></p></div></div>

    </div> <!-- end content -->


    <script>
      var myVar;

      function load() {
          myVar = setTimeout(showPage, 0);
      }

      function showPage() {
        document.getElementById("loader").style.display = "none";
        document.getElementById("content").style.display = "block";
      }
    </script>
    <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-78946949-1', 'auto');
        ga('send', 'pageview');

    </script>
        
  </body>
</html>