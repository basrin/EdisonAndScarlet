
import pyupm_i2clcd as lcd
x = lcd.Jhd1313m1(0, 0x3E, 0x62)
x.write('Hello World!')
