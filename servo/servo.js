var Cylon = require('cylon');
Cylon.robot({
connection: { name: 'edison', adaptor: 'intel-iot' },
device: {name: 'servo', driver: 'servo', pin: 6 },
work: function(my) {
var angle = 45 ;
my.servo.angle(angle);
every((1).second(), function() {
angle = angle + 45 ;
if (angle > 135) {
angle = 45
}
my.servo.angle(angle);
});
}
}).start();
