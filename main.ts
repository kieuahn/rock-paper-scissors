radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.clearScreen()
    } else if (receivedNumber == 1) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . # . .
            . . # . .
            . . . . .
            `)
        basic.clearScreen()
    } else {
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
input.onButtonPressed(Button.A, function () {
    set_hand_to = randint(0, 2)
    if (set_hand_to == 0) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.clearScreen()
    } else if (set_hand_to == 1) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . # . .
            . . # . .
            . . . . .
            `)
        basic.clearScreen()
    } else {
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
input.onButtonPressed(Button.AB, function () {
    if (0 > 0) {
        basic.showString("WINNER")
        basic.showLeds(`
            . . # . .
            . # . # .
            . # # # .
            . # . # .
            . . . . .
            `)
        basic.pause(1000)
    } else if (0 < 0) {
    	
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    set_second_had_to = randint(0, 2)
    radio.sendNumber(set_second_had_to)
})
input.onPinPressed(TouchPin.P1, function () {
    calculate(set_hand_to, set_second_had_to, score_A, score_B)
})
function calculate (num: number, num2: number, new_list1: any[], new_list2: any[]) {
    list1 = []
    list2 = []
    if (num != num2) {
        if (num > num2) {
            list1.push(1)
        } else if (num < num2) {
            list2.push(1)
        }
        list1 = list1
        list2 = list2
    }
    for (let index = 0; index <= list1.length; index++) {
        new_list1.push(0)
    }
}
let list2: number[] = []
let list1: number[] = []
let set_second_had_to = 0
let set_hand_to = 0
let score_B: number[] = []
let score_A: number[] = []
score_A = []
score_B = []
set_hand_to = 0
set_second_had_to = 0
radio.setGroup(2)
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
