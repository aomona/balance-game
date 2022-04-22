function setPosition () {
    if (input.rotation(Rotation.Roll) < -30) {
        x = 0
    } else if (input.rotation(Rotation.Roll) < -20) {
        x = 1
    } else if (input.rotation(Rotation.Roll) > 30) {
        x = 4
    } else if (input.rotation(Rotation.Roll) > 20) {
        x = 3
    } else {
        x = 2
    }
    if (input.rotation(Rotation.Pitch) < -30) {
        y = 0
    } else if (input.rotation(Rotation.Pitch) < -20) {
        y = 1
    } else if (input.rotation(Rotation.Pitch) > 30) {
        y = 4
    } else if (input.rotation(Rotation.Pitch) > 20) {
        y = 3
    } else {
        y = 2
    }
    led.plot(x, y)
}
let y = 0
let x = 0
x = 2
y = 2
led.plot(x, y)
basic.forever(function () {
    setPosition()
})
