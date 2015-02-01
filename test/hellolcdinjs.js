var LCD = require('jsupm_i2clcd');
// Initialize Jhd1313m1 at 0x62 (RGB_ADDRESS) and 0x3E (LCD_ADDRESS)
var myLcd = new LCD.Jhd1313m1 (0, 0x3E, 0x62);
myLcd.setCursor(0,0);

myLcd.setColor(255, 0, 0);
myLcd.write('Hello World');
myLcd.setCursor(1,2);
myLcd.write('Ya Bish');
myLcd.close();
