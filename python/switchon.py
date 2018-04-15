import RPi.GPIO as GPIO

GPIO.setwarnings(false)

GPIO.setmode(GPIO.BCM)
GPIO.setup(23, GPIO.OUT)