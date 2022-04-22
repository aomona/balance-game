let x = 2
let y = 2
led.plot(x, y)
basic.forever(function () {
    if (input.rotation(Rotation.Roll) < -30) {
        x = 0
    } else if (input.rotation(Rotation.Roll) < -20) {
        x = 1
    } else if (input.rotation(Rotation.Roll) < 30) {
        x = 4
    } else if (input.rotation(Rotation.Roll) < 20) {
        x = 3
    } else {
        x = 2
    }
})
