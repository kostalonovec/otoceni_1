let stred = [2, 2]
led.plotBrightness(2, 2, 100)
let souradnice = [[0, 0], [4, 0], [4, 4]]
for (let i of souradnice) {
    led.plot(i[0], i[1])
}
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    let x: number;
    let y: number;
    basic.clearScreen()
    for (let bod of souradnice) {
        x = 0 * (bod[0] - stred[0]) - 1 * (bod[1] - stred[1]) + stred[0]
        y = 1 * (bod[0] - stred[0]) + 0 * (bod[1] - stred[1]) + stred[1]
        bod[0] = x
        bod[1] = y
    }
    for (let h of souradnice) {
        led.plot(h[0], h[1])
    }
    led.plotBrightness(2, 2, 100)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    let x: number;
    let y: number;
    basic.clearScreen()
    for (let bod1 of souradnice) {
        x = 0 * (bod1[0] - stred[0]) + 1 * (bod1[1] - stred[1]) + stred[0]
        y = -1 * (bod1[0] - stred[0]) + 0 * (bod1[1] - stred[1]) + stred[1]
        console.logValue("x", x)
        console.logValue("x", y)
        bod1[0] = x
        bod1[1] = y
    }
    for (let ch of souradnice) {
        led.plot(ch[0], ch[1])
    }
    led.plotBrightness(2, 2, 100)
})
