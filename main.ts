let num = 0
basic.forever(function () {
    basic.showNumber(num)
})
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    num = 6
    for (let index = 0; index < 6; index++) {
        num += -1
        basic.pause(1000)
    }
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    num = 6
    for (let index = 0; index < 6; index++) {
        num += -1
        basic.pause(1000)
    }
    pins.digitalWritePin(DigitalPin.P14, 0)
    for (let index = 0; index < 5; index++) {
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P14, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P14, 0)
        basic.pause(200)
    }
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    num = 3
    for (let index = 0; index < 3; index++) {
        num += -1
        basic.pause(1000)
    }
})
