MbitMore.onReceivedNumberWithLabel("blue", function (numberData) {
    blue = numberData
})
MbitMore.onReceivedNumberWithLabel("brightness", function (numberData) {
    brightness = numberData
})
MbitMore.onReceivedNumberWithLabel("green", function (numberData) {
    green = numberData
})
MbitMore.onReceivedNumberWithLabel("red", function (numberData) {
    red = numberData
    strip.showColor(neopixel.rgb(red, green, blue))
    strip.setBrightness(brightness)
})
let w_temperature = 0
let red = 0
let green = 0
let brightness = 0
let blue = 0
let strip: neopixel.Strip = null
MbitMore.startService()
ModulePlus.ds18init(DigitalPin.P2)
strip = neopixel.create(DigitalPin.P1, 20, NeoPixelMode.RGB)
strip.setBrightness(255)
basic.showIcon(IconNames.SmallHeart)
basic.forever(function () {
    w_temperature = ModulePlus.DSTemperature(DigitalPin.P2)
    MbitMore.sendNumberWithLabel("wt", w_temperature)
    basic.pause(1000)
})
