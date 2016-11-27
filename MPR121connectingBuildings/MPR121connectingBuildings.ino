#include "mpr121.h"
#include "i2c.h"

// only needed if you want to use difference with previous values
int lastMeasurement[12];
int brightness;
int touchThreshold = 512;
int hoveringThresholdMax = 550;
int hoveringThresholdMin = 512;


char val;
boolean touch = false;


// -------------------------------------------LED STRIP STUFF----------------------------------------------
#include "FastLED.h"
#define NUM_LEDS 30
#define DATA_PIN 3

CRGB leds[NUM_LEDS];
//-----------------------------------------------------------------------------------------------------------


void setup()
{
  Serial.begin(57600); 
  i2cInit();
  mpr121QuickConfig();

  for (int i=0; i < 12; i++) { 
    lastMeasurement[i] = hoveringThresholdMax;
  }
  
  Serial.println("Ready...");
  
   //-----------------------------------------------LED STRIP STUFF-----------------------------------
   FastLED.addLeds<WS2812B, DATA_PIN, RGB>(leds, NUM_LEDS);
   
}

void loop()
{
  for (int i=0; i < 12; i++) { 
    
    lastMeasurement[i] = (0.5 * getSensorMeasurement(i)) + (0.5 * lastMeasurement[i]);
    
    Serial.print(lastMeasurement[i]); //-lastMeasurement[i]);
    Serial.print(",");
    
  }
  Serial.println();
  delay(25);

   if (Serial.available()) 
   { // If data is available to read,
     val = Serial.read(); // read it and store it in val
//     valString = Serial.readString(); 
   }

//---------------------------------------------SENSORING---------------------------------------------------
//        NO HANDS NEAR THE SENSOR TURN OFF LED

//      if( val == 'a' && getSensorMeasurement(0) > hoveringThresholdMax ){
//        FastLED.setBrightness(0);
//        FastLED.show();
//      }
//      if( val == 'b' && getSensorMeasurement(1) > hoveringThresholdMax ){
//        FastLED.setBrightness(0);
//        FastLED.show();
//      }
//      if( val == 'c' && getSensorMeasurement(2) > hoveringThresholdMax ){
//        FastLED.setBrightness(0);
//        FastLED.show();
//      }
//      if( val == 'd' && getSensorMeasurement(3) > hoveringThresholdMax ){
//        FastLED.setBrightness(0);
//        FastLED.show();
//      }
//      if( val == 'e' && getSensorMeasurement(4) > hoveringThresholdMax ){
//        FastLED.setBrightness(0);
//        FastLED.show();
//      }
//      if( val == 'f' && getSensorMeasurement(5) > hoveringThresholdMax ){
//        FastLED.setBrightness(0);
//        FastLED.show();
//      }
//      if( val == 'g' && getSensorMeasurement(6) > hoveringThresholdMax ){
//        FastLED.setBrightness(0);
//        FastLED.show();
//      }
//      if( val == 'h' && getSensorMeasurement(7) > hoveringThresholdMax ){
//        FastLED.setBrightness(0);
//        FastLED.show();
//      }

      

//=================================SENSOR 0 TURN ON BY HANDS==========================================

//        HOVERING CHANGING BRIGHTNESS

    if(getSensorMeasurement(0) > touchThreshold && getSensorMeasurement(0) < hoveringThresholdMax ){
      brightness = map(getSensorMeasurement(0),hoveringThresholdMin, hoveringThresholdMax, 200, 0);
      FastLED.setBrightness(brightness);
       for( int i = 0; i < 5; i++){
          leds[i] = CRGB::Red;
          FastLED.show();
       }
       for( int i = 5; i < NUM_LEDS; i++){
          leds[i] = CRGB::Black;
          FastLED.show();
       }       
    }

//        HANDS TOUCH THE SENSOR
   if( val == '1'){

           for( int i = 0; i < 5; i++){
             leds[i] = CRGB::Orange;
             FastLED.show();
             FastLED.setBrightness(255);
           }
           for( int i = 5; i < NUM_LEDS; i++){
              leds[i] = CRGB::Black;
              FastLED.show();
           } 
           
    //    touch = true;
    Serial.println(getSensorMeasurement(11));
    } 
    


//========================================SENSOR 1 TURN ON BY HANDS=========================================


//        HOVERING CHANGING BRIGHTNESS
    if(getSensorMeasurement(1) > touchThreshold && getSensorMeasurement(1) < hoveringThresholdMax ){
      
      brightness = map(getSensorMeasurement(1),hoveringThresholdMin, hoveringThresholdMax, 200, 0);
      FastLED.setBrightness(brightness);
       for( int i = 5; i < 12; i++){
          leds[i] = CRGB::Blue;
          FastLED.show();
       }
       for( int i = 0; i < 5; i++){
          leds[i] = CRGB::Black;
          FastLED.show();

        } 
       for( int i = 12; i < NUM_LEDS; i++){
          leds[i] = CRGB::Black;
          FastLED.show();
       }
                    
    }

//        HANDS TOUCH THE SENSOR

    else if (val == '2') 
    { 
     
        for( int i = 5; i < 12; i++){
          leds[i] = CRGB::Green;
          FastLED.setBrightness(255);
          FastLED.show();
        }
        for( int i = 0; i < 5; i++){
          leds[i] = CRGB::Black;
          FastLED.show();

        }  
        for( int i = 12; i < NUM_LEDS; i++){
          leds[i] = CRGB::Black;
          FastLED.show();

        } 
      touch = false;
    
    }

//========================================SENSOR 2 TURN ON BY HANDS=========================================


//        HOVERING CHANGING BRIGHTNESS
    if(getSensorMeasurement(2) > touchThreshold && getSensorMeasurement(2) < hoveringThresholdMax ){
      
      brightness = map(getSensorMeasurement(2),hoveringThresholdMin, hoveringThresholdMax, 200, 0);
      FastLED.setBrightness(brightness);
       for( int i = 12; i < 14; i++){
          leds[i] = CRGB::Green;
          FastLED.show();
       }
       for( int i = 0; i < 12; i++){
          leds[i] = CRGB::Black;
          FastLED.show();

        } 
       for( int i = 14; i < NUM_LEDS *2/3; i++){
          leds[i] = CRGB::Black;
          FastLED.show();
       }             
    }

//        HANDS TOUCH THE SENSOR

    else if (val == '3') 
    { 
     
        for( int i = 12; i < 14; i++){
          leds[i] = CRGB::Brown;
          FastLED.setBrightness(255);
          FastLED.show();
        } 
        for( int i = 0; i < 12; i++){
          leds[i] = CRGB::Black;
          FastLED.show();

        }
        for( int i = 14; i < NUM_LEDS; i++){
          leds[i] = CRGB::Black;
          FastLED.show();

        } 
      touch = false;
    
    }
//========================================SENSOR 3 TURN ON BY HANDS=========================================


//        HOVERING CHANGING BRIGHTNESS
    if(getSensorMeasurement(3) > touchThreshold && getSensorMeasurement(3) < hoveringThresholdMax ){
      
      brightness = map(getSensorMeasurement(3),hoveringThresholdMin, hoveringThresholdMax, 200, 0);
      FastLED.setBrightness(brightness);
       for( int i = 14; i < 16; i++){
          leds[i] = CRGB::Red;
          FastLED.show();
       }
       for( int i = 0; i < 14; i++){
          leds[i] = CRGB::Black;
          FastLED.show();

        }
       for( int i = 16; i < NUM_LEDS; i++){
          leds[i] = CRGB::Black;
          FastLED.show();
       }             
    }

//        HANDS TOUCH THE SENSOR

    else if (val == '4') 
    { 
     
        for( int i = 14; i < 16; i++){
          leds[i] = CRGB::Orange;
          FastLED.setBrightness(255);
          FastLED.show();
        } 
        for( int i = 0; i < 14; i++){
          leds[i] = CRGB::Black;
          FastLED.show();

        }
        for( int i = 16; i < NUM_LEDS; i++){
          leds[i] = CRGB::Black;
          FastLED.show();

        } 
      touch = false;
    
    }

//========================================SENSOR 4 TURN ON BY HANDS=========================================


//        HOVERING CHANGING BRIGHTNESS
    if(getSensorMeasurement(4) > touchThreshold && getSensorMeasurement(4) < hoveringThresholdMax ){
      
      brightness = map(getSensorMeasurement(4),hoveringThresholdMin, hoveringThresholdMax, 200, 0);
      FastLED.setBrightness(brightness);
       for( int i = 16; i < 19; i++){
          leds[i] = CRGB::Yellow;
          FastLED.show();
       }
       for( int i = 0; i < 16; i++){
          leds[i] = CRGB::Black;
          FastLED.show();

        }
       for( int i = 19; i < NUM_LEDS; i++){
          leds[i] = CRGB::Black;
          FastLED.show();
       }             
    }

//        HANDS TOUCH THE SENSOR

    else if (val == '5') 
    { 
     
        for( int i = 16; i < 19; i++){
          leds[i] = CRGB::Yellow;
          FastLED.setBrightness(255);
          FastLED.show();
        } 
        for( int i = 0; i < 16; i++){
          leds[i] = CRGB::Black;
          FastLED.show();

        }
        for( int i = 19; i < NUM_LEDS; i++){
          leds[i] = CRGB::Black;
          FastLED.show();

        } 
      touch = false;
    
    }

//======================================== SENSOR 5 TURN ON BY HANDS =========================================


//        HOVERING CHANGING BRIGHTNESS
    if(getSensorMeasurement(5) > touchThreshold && getSensorMeasurement(5) < hoveringThresholdMax ){
      
      brightness = map(getSensorMeasurement(5),hoveringThresholdMin, hoveringThresholdMax, 200, 0);
      FastLED.setBrightness(brightness);
       for( int i = 19; i < 22; i++){
          leds[i] = CRGB::Purple;
          FastLED.show();
       }
       for( int i = 22; i < NUM_LEDS; i++){
          leds[i] = CRGB::Black;
          FastLED.show();
        } 
        for( int i = 0 ; i < 19; i++){
          leds[i] = CRGB::Black;
          FastLED.show();
        }        
    }

//        HANDS TOUCH THE SENSOR

    else if (val == '6') 
    { 
     
        for( int i = 19; i < 22; i++){
          leds[i] = CRGB::Magenta;
          FastLED.setBrightness(255);
          FastLED.show();
        } 
        for( int i = 0; i < 19; i++){
          leds[i] = CRGB::Black;
          FastLED.show();
        } 
        for( int i = 22 ; i < NUM_LEDS; i++){
          leds[i] = CRGB::Black;
          FastLED.show();
        } 
        
      touch = false;
    
    }

    //======================================== SENSOR 6 TURN ON BY HANDS =========================================


//        HOVERING CHANGING BRIGHTNESS
    if(getSensorMeasurement(6) > touchThreshold && getSensorMeasurement(6) < hoveringThresholdMax ){
      
      brightness = map(getSensorMeasurement(6),hoveringThresholdMin, hoveringThresholdMax, 200, 0);
      FastLED.setBrightness(brightness);
       for( int i = 22; i < 24; i++){
          leds[i] = CRGB::Grey;
          FastLED.show();
       }
       for( int i = 24; i < NUM_LEDS; i++){
          leds[i] = CRGB::Black;
          FastLED.show();
        } 
        for( int i = 0 ; i < 22; i++){
          leds[i] = CRGB::Black;
          FastLED.show();
        }        
    }

//        HANDS TOUCH THE SENSOR

    else if (val == '7') 
    { 
     
        for( int i = 22; i < 24; i++){
          leds[i] = CRGB::Grey;
          FastLED.setBrightness(255);
          FastLED.show();
        } 
        for( int i = 0; i < 22; i++){
          leds[i] = CRGB::Black;
          FastLED.show();
        } 
        for( int i = 24 ; i < NUM_LEDS; i++){
          leds[i] = CRGB::Black;
          FastLED.show();
        } 
        
      touch = false;
    
    }
        //======================================== SENSOR 7 TURN ON BY HANDS =========================================


//        HOVERING CHANGING BRIGHTNESS
    if(getSensorMeasurement(7) > touchThreshold && getSensorMeasurement(7) < hoveringThresholdMax ){
      
      brightness = map(getSensorMeasurement(7),hoveringThresholdMin, hoveringThresholdMax, 200, 0);
      FastLED.setBrightness(brightness);
       for( int i = 24; i < 26; i++){
          leds[i] = CRGB::Pink;
          FastLED.show();
       }
       for( int i = 26; i < NUM_LEDS; i++){
          leds[i] = CRGB::Black;
          FastLED.show();
        } 
        for( int i = 0 ; i < 26; i++){
          leds[i] = CRGB::Black;
          FastLED.show();
        }        
    }

//        HANDS TOUCH THE SENSOR

    else if (val == '8') 
    { 
     
        for( int i = 24; i < 26; i++){
          leds[i] = CRGB::Pink;
          FastLED.setBrightness(255);
          FastLED.show();
        } 
        for( int i = 0; i < 24; i++){
          leds[i] = CRGB::Black;
          FastLED.show();
        } 
        for( int i = 26 ; i < NUM_LEDS; i++){
          leds[i] = CRGB::Black;
          FastLED.show();
        } 
        
      touch = false;
    
    }

}









int getSensorMeasurement(byte sensorNumber)
{
  int value = mpr121Read2Bytes(0x04 + (sensorNumber << 1));  
  return value;
}

void mpr121QuickConfig(void)
{
  // reset (in case already running)
  mpr121Write(0x80, 0x63);

  // auto config off  
  mpr121Write(ATO_CFG0, 0x00);
  
  // big sensors, use max charge current
  // FFI = 00 (default)
  // CDC = 111111
  //mpr121Write(0x5C, 0x3F);
  mpr121Write(0x5C, 0xFF);

  // CDT=011 charge time, use the one that fits the size of your sensor best
  // SFI=00 (default)
  // ESI=100 (default)
  mpr121Write(0x5D, 0x24); // CDT=001
  //mpr121Write(0x5D, 0x24); // CDT=001
  //mpr121Write(0x5D, 0x44); // CDT=010
  //mpr121Write(0x5D, 0x64); // CDT=011
  //mpr121Write(0x5D, 0x84); // CDT=100
  
  // Electrode Configuration
  mpr121Write(ELE_CFG, 0x0C);	// Enables all 12 Electrodes
  //mpr121Write(ELE_CFG, 0x01);  // Enable first electrode only
  //mpr121Write(ELE_CFG, 0x0B);  // Enable first electrode only
}
