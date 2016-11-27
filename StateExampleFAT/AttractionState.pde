


class AttractionState extends State
{
    PImage logo;
    int val; 

    
    public AttractionState()
    {
        super( "attraction" );
        
    }
      
    public void enterState( State oldState )
    {
        if( logo == null ){
            logo   = loadImage(   "logo-dark.jpg" );
        }
        myPort.write("z");
        println("z"); 
    }


    void handleKeyPress( int keyCode )
    {
        
            stateHandler.changeStateTo(   CATEGORY_STATE );
       

    }
    
    public void doWhileInState()
    {
        image(logo, 0, 0, width, height);
       
         val = myPort.read(); 
         println(val);
         
        
        
    
        
    }
}