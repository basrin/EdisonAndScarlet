
Cylon = require('cylon');



Cylon.robot({
connections: { name: 'edison', adaptor: 'intel-iot' },
  devices: {
    lcd: { driver: 'lcd' }
  },

  work: function(my) {
    my.lcd.on('start', function(){
      my.lcd.print("Hello!");
    });
  }

}).start()
