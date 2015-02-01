var mraa = require('mraa');
var pin = new mraa.Pwm(4);
pin.enable(true);
pin.write(0);
