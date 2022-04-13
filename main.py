stred = (2, 2)
led.plot_brightness(2, 2, 100)

souradnice = [[0,0], [4,0], [4,4]]

for i in souradnice:
    led.plot(i[0], i[1])

def on_button_pressed_a():
    basic.clear_screen()
    for bod in souradnice:
        x = 0 * (bod[0] - stred[0]) - 1 * (bod[1] - stred[1]) + stred[0]
        y = 1 * (bod[0] - stred[0]) + 0 * (bod[1] - stred[1]) + stred[1]
        bod[0] = x
        bod[1] = y

    for h in souradnice:
        led.plot(h[0], h[1])
    led.plot_brightness(2, 2, 100)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    basic.clear_screen()
    for bod1 in souradnice:
        x = 0 * (bod1[0] - stred[0]) + 1 * (bod1[1] - stred[1]) + stred[0]
        y = -1 * (bod1[0] - stred[0]) + 0 * (bod1[1] - stred[1]) + stred[1]
        console.log_value("x", x)
        console.log_value("x", y)
        bod1[0] = x
        bod1[1] = y

    for ch in souradnice:
        led.plot(ch[0], ch[1])
    led.plot_brightness(2, 2, 100)
input.on_button_pressed(Button.B, on_button_pressed_b)