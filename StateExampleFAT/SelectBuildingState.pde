
class SelectBuildingState extends State
{
    PImage manual;
    PImage qrCode;
    boolean touchAtak = false;
    boolean touchWilmink = false;
    boolean playingFileAtak = false;
    boolean playingFileWilmink = false;
    
    public SelectBuildingState()
    {
        super( "select building" );
    }

    public void enterState( State oldState )
    {
        if ( manual == null ) {
            manual = loadImage(   "manual-01.jpg" );
            qrCode = loadImage(    "qrcode.png"   );
        }
    }
    

    public void leaveState( State newState )
    {
        noTint();  // reset the tint fill options, used for transparency
    }


    void handleKeyPress( int keyCode )
    {
        stateHandler.changeStateTo( STANDBY_STATE );
    }
    
    void handleMouseClick(){
        if(mouseX < 25 && mouseY < 25){
          stateHandler.changeStateTo( CATEGORY_STATE );    
        }
        if( mouseX > (width-25) && mouseY < 25){
          stateHandler.changeStateTo( STANDBY_STATE );
        }
    }

    public void doWhileInState()
    {
        image(manual, 0, 0, width, height);
        fill(0);
        rect(0, 0, 25, 25);
        fill(255);
        triangle(2, 12, 20, 2, 20, 22 );
        
        fill(0);
        rect(width-25,  0,    25, 25);
        
        strokeWeight(3);
        fill(255);
        line(width-25,  0, width, 25);
        line(width-25, 25, width,  0);
        
        sentData[0].sendingData(0, "1", "a", atak       , AtakSound);
        sentData[1].sendingData(1, "2", "b", wilmink    , WilminkSound);
        sentData[2].sendingData(2, "3", "c", wolff      , WolffSound);
        sentData[3].sendingData(3, "4", "d", bolwerk    , BolwerkSound);
        sentData[4].sendingData(4, "5", "e", concordia  , ConcordiaSound);
        sentData[5].sendingData(5, "6", "f", proeflokaal, ProeflokaalSound);
        sentData[6].sendingData(6, "7", "g", friends    , FriendsSound);
        sentData[7].sendingData(7, "8", "h", rocks      , RocksSound);
        
      
        
        
          fill(255);
          textSize(18);
          text(nameJSON, 350, 100);
          text(date, 350, 150);
          text(time, 550, 150);
          if(cover != "")
          {
            coverImg = loadImage(cover, "png");
            image(coverImg, 350, 200);
          } 
        
        
    } 
    
}