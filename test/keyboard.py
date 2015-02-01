import os
import serial
from key_control import getch, kbhit

ser = serial.Serial(port="/dev/ttyO4", baudrate=115200)

if __name__ == '__main__':

    ser.close()
    ser.open()

    if ser.isOpen():
        while True:
            if kbhit():
                ch = getch()
                print ch
