  // Example for States
//================================PIR SENSORS=================================
import ddf.minim.*;

Minim minim;
AudioPlayer song;

AudioPlayer AtakSound;
AudioPlayer WilminkSound;
AudioPlayer WolffSound;
AudioPlayer BolwerkSound;
AudioPlayer ConcordiaSound;
AudioPlayer ProeflokaalSound;
AudioPlayer FriendsSound;
AudioPlayer RocksSound;

// ===============================ADDED BY RONALD====================================
import processing.serial.*;

Serial myPort;
Serial myPort2;
SendData[] sentData = new SendData[8];
Venue[] venues = new Venue[8];
AudioPlayer[] soundLogo = new AudioPlayer[8];


int touchsensorValues[] = {0, 0, 0, 0 , 0, 0, 0, 0, 0, 0, 0, 0};
boolean toggle[] = {false, false, false, false, false, false, false, false, false, false, false, false };
boolean touch = false;
int touchThreshold = 512; 


// ===============================ADDED BY JORDAN====================================

import processing.net.*;
import http.requests.*;

Venue atak;
Venue proeflokaal;
Venue rocks;
Venue friends;
Venue bolwerk;
Venue concordia;
Venue wolff;
Venue wilmink;

String nameJSON  = "Please select a venue.";
String date  = "";
String time  = "";
String id    = "";
String cover = "";
PImage coverImg;


PostRequest post; 

//=====================================================================================




StateHandler stateHandler;

final State        STANDBY_STATE = new        StandbyState();
final State     ATTRACTION_STATE = new     AttractionState();
final State       CATEGORY_STATE = new       CategoryState();
final State SELECTBUILDING_STATE = new SelectBuildingState();



PApplet parent = this;


void setup()
{
    size( 1920,1280 );
    //fullScreen();
    noStroke(); 
    stateHandler = new StateHandler( "State Example" );
    stateHandler.changeStateTo( STANDBY_STATE );
    
//=================================PIR=================================     
     minim = new Minim(this);
     song = minim.loadFile("song.wav");
     
//==================================SOUND===================================     
     AtakSound = minim.loadFile       ("atak.mp3");
     WilminkSound = minim.loadFile    ("wilmink.mp3");
     WolffSound = minim.loadFile      ("wolff.mp3");
     BolwerkSound = minim.loadFile    ("bolwerk.mp3");
     ConcordiaSound = minim.loadFile  ("concordia.mp3");
     ProeflokaalSound = minim.loadFile("proeflokaal.mp3");
     FriendsSound = minim.loadFile    ("friends.mp3");
     RocksSound = minim.loadFile      ("rocks.mp3");
     
//=================================ADDED BY RONALD=================================   
    printArray(Serial.list());  //list of available serial ports
    String portName   = Serial.list()[0]; //replace 0 with whatever port you want to use.
    String portName2  = Serial.list()[1];
    myPort  = new Serial(this, portName , 57600); 
    myPort2 = new Serial(this, portName2, 9600); 
    
    for(int i  = 0; i < 8; i++){
      sentData[i] = new SendData();
    }
    
//=================================ADDED BY JORDAN=================================   
    atak        = new Venue(width/2,  10, 175, 75, color(150), color(255), "Atak",         0);
    proeflokaal = new Venue(width/2,  95, 175, 75, color(150), color(255), "Proeflokaal",  0);
    rocks       = new Venue(width/2, 180, 175, 75, color(150), color(255), "Rocks",        0);
    friends     = new Venue(width/2, 265, 175, 75, color(150), color(255), "Friends",      0);
    bolwerk     = new Venue(width/2, 350, 175, 75, color(150), color(255), "Bolwerk",      0);
    concordia   = new Venue(width/2, 435, 175, 75, color(150), color(255), "Concordia",    0);
    wolff       = new Venue(width/2, 520, 175, 75, color(150), color(255), "Wolff",        0);
    wilmink     = new Venue(width/2, 605, 175, 75, color(150), color(255), "Wilmink",      0);
    
    post = new PostRequest("http://antertain.org/php/getGroup.php");
    post.addUser("USERNAME", "PASSWORD");
    post.addHeader("Content-Type", "application/json");
    
    
}

void draw()
{
    stateHandler.handleState();
    
    
    print(touchsensorValues[0]);
    print(", ");
    print(touchsensorValues[1]);
    print(", ");
    print(touchsensorValues[2]);
    print(", ");
    print(touchsensorValues[3]);
    print(", ");
    print(touchsensorValues[4]);
    print(", ");
    print(touchsensorValues[5]);
    print(", ");
    print(touchsensorValues[6]);
    print(", ");
    print(touchsensorValues[7]);
    println();
    //int val;
    //if(myPort.available() > 0)
    //{
    //  val = myPort.read();
    //  //println(val);
    //}
} //<>//







void serialEvent(Serial port) 
{
  try { 
    
     // read the string untill the newline character (println) Arduino
    String incomingString = port.readStringUntil(10);
    if(incomingString != null ){
    //println(incomingString);
    }
    if(incomingString != null) {
      //println(incomingData);
      
      // Remove whitespace characters from the beginning and end of the string with trim()
      incomingString        = trim(incomingString);
      
      // Break the String into pieces using the comma character with split()
      // Use shorten() to remove the last element. Since this is empty (,) at the end
      String[] incomingData = split(incomingString, ',');
     
     

      if(incomingData.length>=touchsensorValues.length) {
        for(int i = 0; i<touchsensorValues.length; i++) {
          touchsensorValues[i] = int(incomingData[i]);  
        }
      }
    }
  }
  catch (Exception e) {
    //println(e);
    println("Monitors still initializing");
    // decide what to do here
  }  
  
}