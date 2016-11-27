<!DOCTYPE html>
<html>
	<head>
		<title>Antertain -- App</title>

		<meta charset="UTF-8">
		<meta name="theme-color" content="#2b2d3d">
		<meta name="viewport" content="width=device-width, maximum-scale=1  maximum-scale=1"/>

		<link rel="icon" href="favicon.ico" sizes="16x16 32x32" type="image/png">
		<link rel="stylesheet" href="style/style.css" />

		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
		<script src="js/moment.js"></script>
		<script src="js/jquery.simpleWeather.min.js"></script>
		<script src="js/events.js"></script>
		<script type="text/javascript" src="js/jquery-easing-1.3.min.js"></script>
		<script type="text/javascript" src="js/top.js"></script>
		<script type="text/javascript" src="js/smoothscroll.js"></script>
	</head>

	<body>
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

	<div class="content">
		<div id="mapchoice">
			<div class="map">
				<img src="img/map2.svg">
				<div>
					<a style="display:block" href="#ataklink" data-id="211738235503264" class="item active">
			  			<div class="chooseatak">
			  				<img src="img/atak.png">
			  			</div>
					</a>
				</div>
				<div>
					<a style="display:block" href="#friendslink"  data-id="172171559518838" class="item">
			  			<div class="choosefriends">
			  				<img src="img/friends.png">
			  			</div>
					</a>
				</div>
				<div >
					<a style="display:block" href="#proeflink" data-id="176301979186793" class="item">
			  			<div class="chooseproef">
			  				<img src="img/proef.png">
			  			</div>
					</a>
				</div>
				<div >
					<a  style="display:block" href="#bolwerklink" data-id="117452781623813" class="item">
			  			<div  class="choosebolwerk">
			  				<img src="img/bolwerk.png">
			  			</div>
					</a>
				</div>
				<div >
					<a style="display:block" href="#rockzlink" data-id="173697942679040" class="item">
		  				<div class="chooserockz">
		  					<img src="img/rockz.png">
		  				</div>
					</a>
				</div>
				<div >
					<a style="display:block" href="#wilminklink" data-id="113132882123321" class="item">
		  				<div class="choosewilmink">
		  					<img src="img/wilmink.png">
		  				</div>
					</a>
				</div>
				<div >
					<a style="display:block" href="#concordialink" data-id="138353612938701" class="item">
		  				<div class="chooseconcordia">
		  					<img src="img/concordia.png">
		  				</div>
					</a>
				</div>
				<div >
					<a style="display:block" href="#wolfflink" data-id="291447287574354" class="item">
		  				<div class="choosewolff">
		  					<img src="img/wolff.png">
		  				</div>
					</a>
				</div>
			</div>	<!-- // end map class -->
		</div>	<!-- // end mapchoice id -->

		<div id="expl">
			<div class="facebook-doohickey">
			<fb:login-button scope="public_profile,email" onlogin="checkLoginState();">
			</fb:login-button>
			<div id="status"><h1></h1></div>
			</div>
			<p>Discover your city and find out about great events! - Culture Map will show you all the events in Enschede you need to know about!</p>
			<p>Click on the Locations to find out what is happening there.</p>
		</div>
			
		<div class="legend">
			<p class="red">Red = Music</p><p class="blue">Grey = Theater & Cinema </p>
		</div>

		<div class="expl2">
			<div class="facebook-doohickey">
				<fb:login-button scope="public_profile,email" onlogin="checkLoginState();">
				</fb:login-button>
				<div id="status2">
					<h1>
					</h1>
				</div>
			</div>	
			<p>Discover your city and find out about great events! - Culture Map will show you all the events in Ensche you need to know about!</p>
			<p>Click on the Locations to find out what is happening there.</p>
			<p class="red">Red = Music</p><p class="blue">Gray = Theater & Cinema </p>
		</div>

		<div class="mobileChoice">
			<div class="mobileButtons">
				<div class="atakButton">
					<a href="#ataklink" data-id="211738235503264" class="item active">
				  		<h3>Atak</h3>
					</a>
				</div>

				<div class="friendsButton">
					<a href="#friendslink"  data-id="172171559518838" class="item">
				  		<h3>Friends</h3>
					</a>
				</div>
				
				<div class="bolwerkButton">
					<a href="#bolwerklink" data-id="117452781623813" class="item">
						<h3>Café Het Bolwerk</h3>
					</a>
				</div>

				<div class="wolffButton">
					<a href="#wolfflink" data-id="291447287574354" class="item">
			  			<h3>Wolff Cinema</h3>
					</a>
				</div>
				
				<div class="proefButton">
					<a href="#proeflink" data-id="176301979186793" class="item">
				  		<h3>Proeflokaal</h3>
					</a>
				</div>

				<div class="concordiaButton">
					<a href="#concordialink" data-id="138353612938701" class="item">
			  			<h3>Concordia</h3>
					</a>
				</div>

				<div class="rocksButton">
					<a  href="#rockzlink" data-id="173697942679040" class="item">
			  			<h3>Café Rocks</h3>
					</a>
				</div>

				<div class="wilminkButton">
					<a href="#wilminklink" data-id="113132882123321" class="item">
			  			<h3>Wilmink Theater</h3>
					</a>
				</div>	
			</div> <!-- // end mobilebuttons class  -->
		</div> <!-- // end mobilechoice class -->
	</div>	<!-- // end content class -->

	<!-- Facebook Data -->
	<div class="wrapper" id="wrapper"></div>

			<div id="ataklink"></div>
			<div id="friendslink"></div>
			<div id="proeflink"></div>
			<div id="bolwerklink"></div>
			<div id="rockzlink"></div>
			<div id="wilminklink"></div>
			<div id="concordialink"></div>
			<div id="wolfflink"></div>
			<a href="#0" class="cd-top">TOP</a>	
		
	<!-- Google Analytics -->
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
