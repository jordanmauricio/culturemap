var atakCount;
var proefCount;
var rocksCount;
var friendsCount;
var bolwerkCount;
var concordiaCount;
var wilminkCount;
var wolffCount;
var spacing = 10;
var spacing2 = 0;
  
$(document).ready(function(){
    clickData();

    //code goes here that will be run every second.  
    setInterval(function(){ 

            var data = {
                "action": "test"
            };

            data = $(this).serialize() +  "&" + $.param(data);

            $.ajax({
                type: "GET",
                dataType: "json",
                url: "php/getGroup.php",
            }).done( function( data ){ 
                    //optimize with loop? 
                    atakCount = parseInt(data[0].count);
                    proefCount = parseInt(data[1].count);
                    rocksCount = parseInt(data[2].count);
                    friendsCount = parseInt(data[3].count);
                    bolwerkCount = parseInt(data[4].count);
                    concordiaCount = parseInt(data[5].count);
                    wilminkCount = parseInt(data[6].count);
                    wolffCount = parseInt(data[7].count);
                    changeStyle();       
            }); 
        return false;
    }, 1000);

    //data for Brid.ge that will be run every 3 seconds. 
    setInterval(function(){ 
        
        $.ajax({

            url: "http://178.21.117.113:1026/v1/contextEntities/location_popularity_antertain",
            method: "POST",
            headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
            dataType: "jsonp",

            data: {
                "type": "Project",
                "isPattern": "false",
                "id": "location_popularity_antertain",
                "attributes": [
                    {
                        "name": "Poppodium_Atak",
                        "value": atakCount,
                    },
                    {
                        "name": "Wilmink_Theater",
                        "value": wilminkCount,
                    },
                    {
                        "name": "Cafe_Bolwerk",
                        "value": bolwerkCount,
                    },
                    {
                        "name": "Concordia",
                        "value": concordiaCount,
                    },
                    {
                        "name": "Proeflokaal_Belgie",
                        "value": proefCount,
                    },
                    {
                        "name": "Friends",
                        "value": friendsCount,
                    },
                    {
                        "name": "Cafe_Rocks",
                        "value": rocksCount,
                    }
                ]
            },
           
        }).done(function(){
            console.log("Brid.ge Success");
        });

    return false;
    }, 3000);
}); // document ready


function changeStyle(){   
    //optimize with loop
    var Count = (atakCount + proefCount + rocksCount + friendsCount + bolwerkCount + concordiaCount + wilminkCount + wolffCount)*10;

    atakX = (atakCount  *10000 )/Count;
    proefX = (proefCount  *10000 )/ Count;
    rocksX = (rocksCount  *10000)/ Count;
    friendsX = (friendsCount  *10000)/ Count;
    bolwerkX = ( bolwerkCount *10000  )/ Count;
    concordiaX = ( concordiaCount *10000  )/ Count;
    wilminkX = ( wilminkCount *10000  )/ Count;
    wolffX = ( wolffCount *10000  )/ Count;
    mobileView();
}

function mobileView(){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        var circleAtak = $( '#advancedAtak' ).css( {"width": atakX  , "height": atakX  , "float": "left", "display" :"inline"} );
        var circleProef = $( '#advancedProef' ).css( {"width": proefX, "height": proefX ,  "float": "left", "display" :"inline"} );
        var circleRocks = $( '#advancedRocks' ).css( {"width": rocksX, "height": rocksX , "float": "left", "display" :"inline"} );
        var circleFriends = $( '#advancedFriends' ).css( {"width": friendsX, "height": friendsX , "float": "left", "display" :"inline"} );
        var circleBolwerk = $( '#advancedBolwerk' ).css( {"width": bolwerkX, "height": bolwerkX , "float": "left", "display" :"inline"} );
        var circleConcordia = $( '#advancedConcordia' ).css( {"width": concordiaX, "height": concordiaX , "float": "left", "display" :"inline"} );
        var circleWilmink = $( '#advancedWilmink' ).css( {"width": wilminkX, "height": wilminkX, "float": "left", "display" :"inline"} );
        var circleWolff = $( '#advancedWolff' ).css( {"width": wolffX, "height": wolffX , "float": "left", "display" :"inline"} );
    } else {
        var circleAtak = $( '#advancedAtak' ).css( {"position": "absolute", "width": atakX , "height": atakX, "left": spacing2  +"px"} );
        var circleProef = $( '#advancedProef' ).css( {"position": "absolute","width": proefX, "height": proefX , "left": atakX + spacing + "px" } );
        var circleRocks = $( '#advancedRocks' ).css( {"position": "absolute","width": rocksX, "height": rocksX, "left": atakX + proefX + (spacing*2) + "px" } );
        var circleFriends = $( '#advancedFriends' ).css( {"position": "absolute","width": friendsX, "height": friendsX , "left": atakX + proefX + rocksX + (spacing*3) + "px"} );
        var circleBolwerk = $( '#advancedBolwerk' ).css( {"position": "absolute","width": bolwerkX, "height": bolwerkX , "left": atakX + proefX + rocksX + friendsX + (spacing*4) + "px" } );
        var circleConcordia = $( '#advancedConcordia' ).css( {"position": "absolute","width": concordiaX, "height": concordiaX , "left": atakX + proefX + rocksX + friendsX + bolwerkX + (spacing*5) + "px"} );
        var circleWilmink = $( '#advancedWilmink' ).css( {"position": "absolute","width": wilminkX, "height": wilminkX , "left": atakX + proefX + rocksX + friendsX + bolwerkX + concordiaX +(spacing*6) + "px" } );
        var circleWolff = $( '#advancedWolff' ).css( {"position": "absolute","width": wolffX, "height": wolffX , "left": atakX + proefX + rocksX + friendsX + bolwerkX + concordiaX + wilminkX +(spacing*7) + "px" } );   
    }
}

function clickData(){
    atak = "Atak:";
    proef = "Proeflokaal Belgie:";
    rocks = "Café Rocks:";
    friends = "Friends: ";
    bolwerk = "Het Bolwerk:";
    concordia = "Concordia: ";
    wilmink = "Wilmink Theater:";
    wolff = "Wolff Bioscoop:";

    atakText = "Concerts, Parties and Festivals";
    proefText = "Beer, Live Music and Gezelligheid ";
    rocksText = "Bands, Music and Rock ";
    friendsText = "Party, Dancing and Drinks";
    bolwerkText = "Music, Relaxing and Jazz";
    concordiaText = "Film, Theater and visual Art";
    wilminkText = "Theater, Music and Art";
    wolffText = "Movies, Music and Friends";

    //distinguish between devices for click vs mousehover
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
       $( "#advancedAtak" ).click(function() {
            $( "#target h3" ).text( atakCount );
            $( "#target h2" ).text( atak );
            $( "#target p " ).text( atakText );
        }).mouseout(function() {
            $( "#target p").text( "" );
            $( "#target h2").text( "" );
            $( "#target h3").text( "" );
        });

        $( "#advancedProef" ).click(function() {
            $( "#target h3" ).text( proefCount );
            $( "#target h2" ).text( proef);
            $( "#target p" ).text(proefText );
        }).mouseout(function() {
            $( "#target h3").text( "" );
            $( "#target h2").text( "" );
            $( "#target p ").text( "" );
        });
        $( "#advancedRocks" ).click(function() {
            $( "#target h3" ).text( rocksCount );
            $( "#target h2" ).text( rocks);
            $( "#target p" ).text( rocksText );
        }).mouseout(function() {
            $( "#target p").text( "" );
            $( "#target h2").text( "" );
            $( "#target h3").text( "" );
        });
       
        $( "#advancedFriends" ).click(function() {
            $( "#target h3" ).text( friendsCount  );
            $( "#target h2" ).text( friends);
            $( "#target p" ).text( friendsText );
        }).mouseout(function() {
            $( "#target h3").text( "" );
            $( "#target h2").text( "" );
            $( "#target p ").text( "" );
        });
        $( "#advancedBolwerk" ).click(function() {
            $( "#target h3" ).text( bolwerkCount);
            $( "#target h2" ).text( bolwerk );
            $( "#target p" ).text( bolwerkText);
        }).mouseout(function() {
            $( "#target p ").text( "" );
            $( "#target h2").text( "" );
            $( "#target h3").text( "" );
        });
         $( "#advancedConcordia" ).click(function() {
            $( "#target h3" ).text( concordiaCount  );
            $( "#target h2" ).text( concordia );
            $( "#target p" ).text( concordiaText );
        }).mouseout(function() {
            $( "#target h3").text( "" );
            $( "#target h2").text( "" );
            $( "#target p ").text( "" );
        });
        $( "#advancedWilmink" ).click(function() {
            $( "#target h3" ).text( wilminkCount  );
            $( "#target h2" ).text( wilmink );
            $( "#target p" ).text( wilminkText);
        }).mouseout(function() {
            $( "#target h3").text( "" );
            $( "#target h2").text( "" );
            $( "#target p ").text( "" );
        });
        $( "#advancedWolff" ).click(function() {
            $( "#target h3" ).text( wolffCount  );
            $( "#target h2" ).text( wolff);
            $( "#target p" ).text( wolffText );
        }).mouseout(function() {
            $( "#target h3").text( "" );
            $( "#target h2").text( "" );
            $( "#target p ").text( "" );
        });

    } else {

        $( "#advancedAtak" ).mouseover(function() {
            $( "#target h3" ).text( atakCount );
            $( "#target h2" ).text( atak );
            $( "#target p" ).text( atakText );
        }).mouseout(function() {
            $( "#target p").text( "" );
            $( "#target h2").text( "" );
            $( "#target h3").text( "" );
        });

        $( "#advancedProef" ).mouseover(function() {
            $( "#target h3" ).text( proefCount );
            $( "#target h2" ).text( proef );
            $( "#target p" ).text(proefText );
        }).mouseout(function() {
            $( "#target h3").text( "" );
            $( "#target h2").text( "" );
            $( "#target p ").text( "" );
        });
        $( "#advancedRocks" ).mouseover(function() {
            $( "#target h3" ).text( rocksCount );
            $( "#target h2" ).text( rocks );
            $( "#target p" ).text( rocksText );
        }).mouseout(function() {
            $( "#target p").text( "" );
            $( "#target h2").text( "" );
            $( "#target h3").text( "" );
        });
       
        $( "#advancedFriends" ).mouseover(function() {
            $( "#target h3" ).text( friendsCount  );
            $( "#target h2" ).text( friends );
            $( "#target p" ).text( friendsText );
        }).mouseout(function() {
            $( "#target h3").text( "" );
            $( "#target h2").text( "" );
            $( "#target p ").text( "" );
        });
        $( "#advancedBolwerk" ).mouseover(function() {
            $( "#target h3" ).text( bolwerkCount);
            $( "#target h2" ).text( bolwerk );
            $( "#target p" ).text( bolwerkText);
        }).mouseout(function() {
            $( "#target p ").text( "" );
            $( "#target h2").text( "" );
            $( "#target h3").text( "" );
        });
         $( "#advancedConcordia" ).mouseover(function() {
            $( "#target h3" ).text( concordiaCount  );
            $( "#target h2" ).text( concordia );
            $( "#target p" ).text( concordiaText );
        }).mouseout(function() {
            $( "#target h3").text( "" );
            $( "#target h2").text( "" );
            $( "#target p ").text( "" );
        });
        $( "#advancedWilmink" ).mouseover(function() {
            $( "#target h3" ).text( wilminkCount  );
            $( "#target h2").text( wilmink );
            $( "#target p" ).text( wilminkText);
        }).mouseout(function() {
            $( "#target h3").text( "" );
            $( "#target h2").text( "" );
            $( "#target p ").text( "" );
        });
        $( "#advancedWolff" ).mouseover(function() {
            $( "#target h3" ).text( wolffCount  );
            $( "#target h2" ).text( wolff);
            $( "#target p" ).text( wolffText );
        }).mouseout(function() {
            $( "#target h3").text( "" );
            $( "#target h2").text( "" );
            $( "#target p ").text( "" );
        });
    };
}





