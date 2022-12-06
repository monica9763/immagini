input.onButtonPressed(Button.A, function () {
    basic.showString("Ciao")
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.LeftTriangle)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # . . . .
        . # . . .
        . . # . .
        . . . # .
        . . . . #
        `)
})
basic.forever(function () {
    basic.showIcon(IconNames.Square)
})
