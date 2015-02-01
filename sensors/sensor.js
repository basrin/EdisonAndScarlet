var m = require('mraa'); //require mraa
var Cylon = require('cylon');

console.log('MRAA Version: ' + m.getVersion()); //write the mraa version to the console

var analogPin0 = new m.Aio(0); //setup access analog inpuput pin
var analogPin1 = new m.Aio(1); // this is the pin where the temperatures
var analogPin2 = new m.Aio(2); // light pin

var sound, temp, light;
var myRobo = Cylon.robot({
  connections: {
    keyboard: { adaptor: 'keyboard' }
  },

  devices: {
    keyboard: { driver: 'keyboard' }
  },

  work: function(my) {
    my.keyboard.on('t', function(key) {
      temp =  analogPin1.read();
      console.log("T PRESSED! Temp: " + temp);
    });
    my.keyboard.on('l', function(key) {
      light =  analogPin2.read();
      console.log("L PRESSED! Light: " + light);
    });
  }
}).start();


setInterval(function () {
  sound = analogPin0.read();
  temp = analogPin1.read();
  light = analogPin2.read();

  if (sound > 80) {
    console.log("ALERT! Someone broke into yo house!");
  }
  displayLCD(light,temp,sound);
}, 10)

function displayLCD(x, y, z) {
var LCD = require('jsupm_i2clcd');
// Initialize Jhd1313m1 at 0x62 (RGB_ADDRESS) and 0x3E (LCD_ADDRESS)
var myLcd = new LCD.Jhd1313m1 (0, 0x3E, 0x62);
myLcd.setCursor(0,0);

myLcd.setColor(255, 0, 0);
myLcd.write('Light: ' + x + ',T: ' + y);
myLcd.setCursor(1,2);
myLcd.write('Sound: ' + z);
myLcd.close();
}



/*
while(1){

if(myRobo.work){
//var soundValue = analogPin0.read(); //read the value of the analog pin
var tempValue = analogPin1.read();

//var lightValue = analogPin2.read();
//console.log("Sound value: " + soundValue); //write the value of the 
//analog pin to the consol

console.log("Temperature: " + tempValue);
//console.log("Light value: " + lightValue);
}

//send a message to the client that their alarm has been triggered
}


*/
