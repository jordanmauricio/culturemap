const int motionDetectionPin = 4;     // the number of the pushbutton pin
const int ledPin =  13;      // the number of the LED pin

// variables will change:
int motionState = 0;         // variable for reading the pushbutton status

void setup() {
  Serial.begin(9600);
  
  // initialize the LED pin as an output:
  pinMode(ledPin, OUTPUT);
  // initialize the pushbutton pin as an input:
  pinMode(motionDetectionPin, INPUT);
}

void loop() {
  // read the state of the pushbutton value:
  motionState = digitalRead(motionDetectionPin);

  // check if the pushbutton is pressed.
  // if it is, the buttonState is HIGH:
  if (motionState == HIGH) {
    // turn LED on:
    Serial.write(1);
    
    digitalWrite(ledPin, HIGH);
    //Serial.println("MotionDetection");
    
  } else {
    // turn LED off:
    Serial.write(0);
    
    digitalWrite(ledPin, LOW);
  }
  delay(1000);
}
