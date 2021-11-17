radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.clearScreen()
    } else if (receivedNumber == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.clearScreen()
    } else {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . # . .
            . . # . .
            . . . . .
            `)
        basic.clearScreen()
    }
})
input.onGesture(Gesture.Shake, function () {
    set_hand_to = randint(0, 2)
    if (set_hand_to == 0) {
        radio.sendNumber(0)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.clearScreen()
    } else if (set_hand_to == 1) {
        radio.sendNumber(1)
        basic.showLeds(`
            . # . # .
            . # . # .
            . . # . .
            . . # . .
            . . . . .
            `)
        basic.clearScreen()
    } else {
        radio.sendNumber(2)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.clearScreen()
    }
})
let set_hand_to = 0
basic.showString("START")
music.playTone(262, music.beat(BeatFraction.Whole))
basic.pause(300)
for (let index = 0; index <= 2; index++) {
    basic.showNumber(3 - index)
    music.playTone(262, music.beat(BeatFraction.Quarter))
}
basic.clearScreen()
basic.forever(function () {
	
})
