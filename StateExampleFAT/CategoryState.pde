
class CategoryState extends State
{    
    color button1 = color ( 43, 45 , 61 );
    color button2 = color (216, 46 , 75 );
    color button3 = color (219, 219, 219);
    color button1HighLight = color ( 63, 65 , 81 );
    color button2HighLight = color (236, 66 , 95 );
    color button3HighLight = color (2409, 239, 239);
    
    String categoryName;
    
    int xPos;
    int yPos;
    int sizeWidth = 750;
    int sizeHeight= 300;
    int yStart = 70;
    int yDistance = 400;
    
    public CategoryState()
    {
        super( "category" );
    }


    void handleMouseClick() {
          if(mouseX > (width/2)-(sizeWidth/2) && mouseX < ((width/2)-(sizeWidth/2)) + sizeWidth) {
            
            if( mouseY > (yStart + (yDistance * 0)) && mouseY < ((yDistance * 0) + yStart) + sizeHeight){
              stateHandler.changeStateTo( SELECTBUILDING_STATE );
            } 
            
            
            if( mouseY > (yStart + (yDistance * 1)) && mouseY < ((yDistance * 1) + yStart) + sizeHeight){
              stateHandler.changeStateTo( SELECTBUILDING_STATE );
            }
            
            if( mouseY > (yStart + (yDistance * 0)) && mouseY < ((yDistance * 2) + yStart) + sizeHeight){
              stateHandler.changeStateTo( SELECTBUILDING_STATE );
            }
          } 
        
  }


    public void doWhileInState()
    {
        background(0);
        
        //println( button1);
        
        drawButton( 0, button1, "Music");
        drawButton( 1, button2, "Theater");
        //drawButton( 2, button3, "Cinema");
        
        highLightButton(0, button1HighLight, "Music");
        highLightButton(1, button2HighLight, "Theater");
        //highLightButton(2, button3HighLight, "Cinema");
    }


    void drawButton(int numberOfButton, color c, String tname)
    {  
        int x  = (width/2)-(sizeWidth/2);
        int y = yStart + (numberOfButton * yDistance);
        xPos       = x; 
        categoryName = tname;
        
        fill(c);
        rect(x, y, sizeWidth, sizeHeight);
        fill(255);
        text(categoryName, (width/2)-100, y+200, 400, 400);
        textSize(100);
    }
    
    void highLightButton(int numberOfButton, color h, String tname){
            
      if( mouseY > (yStart + (yDistance * numberOfButton)) && mouseY < ((yDistance * numberOfButton) + yStart) + sizeHeight){
                
        int x  = (width/2)-(sizeWidth/2);
        int y = yStart + (numberOfButton * yDistance);
        categoryName = tname;
                
        fill(h);
        rect(x, y, sizeWidth, sizeHeight);
        fill(255);
        text(categoryName, (width/2)-100, y+200, 400, 200);
        textSize(100);
       }
         
      
    }
}