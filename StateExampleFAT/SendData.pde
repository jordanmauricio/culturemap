
class SendData{
  
  int sensor;
  String writeWhenON;
  String writeWhenOFF;
  Venue objName;
  
   void sendingData(int chooseSensor, String ON, String OFF, Venue venue, AudioPlayer soundLogo){
     sensor = chooseSensor;
     writeWhenON = ON;
     writeWhenOFF = OFF;
     

     
     if(!toggle[chooseSensor] && touchsensorValues[chooseSensor] < touchThreshold){
       myPort.write(ON);
       toggle[chooseSensor] = true;
       println(ON);
       //turnon;
       
          soundLogo.rewind();
          soundLogo.play();
          
          venue.click(); 
          venue.fetchData();
          
          
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

     else if(toggle[chooseSensor] && touchsensorValues[chooseSensor] >= touchThreshold){
       myPort.write(OFF);
       toggle[chooseSensor] = false;
       println(OFF);
       //turnoff;
     }
     
   }  
  
  
  
}