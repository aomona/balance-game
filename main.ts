function judge () {
    if (x == 5 || y == 5) {
        basic.clearScreen()
        basic.showIcon(IconNames.No)
        game2 = 1
    }
    count = 0
    for (let i = 0; i <= 4; i++) {
        for (let j = 0; j <= 4; j++) {
            if (led.point(i, j)) {
                count += 1
            }
        }
    }
    if (count == 25) {
        basic.clearScreen()
        basic.showIcon(IconNames.Happy)
        game2 = 2
    }
}
function setPosition () {
    if (input.rotation(Rotation.Roll) < -40 || input.rotation(Rotation.Roll) > 40) {
        x = 5
    } else if (input.rotation(Rotation.Roll) < -30) {
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
    if (input.rotation(Rotation.Pitch) < -40 || input.rotation(Rotation.Pitch) > 40) {
        y = 5
    } else if (input.rotation(Rotation.Pitch) < -30) {
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
let count = 0
let game2 = 0
let y = 0
let x = 0
x = 2
y = 2
game2 = 0
led.plot(x, y)
basic.forever(function () {
    if (game2 == 0) {
        setPosition()
        judge()
    }
    serial.writeNumber(x)
    serial.writeNumber(y)
    serial.writeLine("" + (game2))
})
