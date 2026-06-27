let dado = 0
input.onGesture(Gesture.Shake, function () {
    // Genera un número del 1 al 6 al agitar la micro:bit
    dado = randint(1, 6)
    if (dado == 1) {
        // SOL: avanza 2 lugares
        basic.showLeds(`
            . # . # .
            # . # . #
            . # # # .
            # . # . #
            . # . # .
            `)
    } else if (dado == 2) {
        // RESGUARDO: avanza 1 lugar
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
    } else if (dado == 3) {
        // AGUA: avanza 3 lugares (Actividad 4)
        basic.showLeds(`
            . . # . .
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            `)
    } else if (dado == 4) {
        // BASURA: pierde el turno (Actividad 4)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else if (dado == 5) {
        // VIENTO: retrocede 2 lugares
        basic.showLeds(`
            . # # . .
            # . . # .
            . . # # .
            . # . . .
            # # # # .
            `)
    } else {
        // PALA: vuelve a tirar (por descarte es el valor 6)
        basic.showLeds(`
            . . . # #
            . . . # #
            . . # . .
            . # . . .
            # . . . .
            `)
    }
})
