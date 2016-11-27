class StandbyState extends State
{
     int val; 
     boolean playingFile = false;
     boolean somebodysHere = false;
     
     public StandbyState(){
        super("standby");
        
    }
    void somebodyIsNear()
    {    
      println(somebodysHere);
        
    }


    public void doWhileInState()
    {
        background( 0 );
        if ( myPort2.available() > 0) 
        {  // If data is available,
          val = myPort2.read();         // read it and store it in val
          println(val);
         if( val == 1 && playingFile == false && somebodysHere == false ){
          println("song playing");
          song.rewind();
          song.play();
          playingFile = true;
          somebodysHere = true;
       
          }
        
       
          if (val == 0){
            playingFile = false;
            
          }
        }
        
        if (somebodysHere == true){
          stateHandler.changeStateTo( ATTRACTION_STATE );
          somebodysHere = false;
        }
    }
}