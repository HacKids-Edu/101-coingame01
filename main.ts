/**
 * 0,05 - P2
 * 
 * 0,10 - P1 & P2
 * 
 * 0,25 - P1
 * 
 * 0,50 - P0 & P1
 * 
 * 1,00 - P0
 */
// nova rodada do jogo
input.onButtonPressed(Button.A, function () {
    P0 = 0
    P1 = 0
    P2 = 0
    CoinSum = 0
    // define um valor aleatório, múltiplo de 0,05
    MetaCoin = 0.05 * randint(11, 99)
    // Neste exemplo mostramos o valor como numério, no 
    basic.showNumber(MetaCoin)
    StartGame = 1
})
// mostra resultado
input.onButtonPressed(Button.B, function () {
    StartGame = 0
    basic.showNumber(CoinSum)
    // compara o valor gerado aleatoriamente com o valor somado pelo jogador
    if (CoinSum == MetaCoin) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
    CoinSum = 0
})
let MetaCoin = 0
let StartGame = 0
let CoinSum = 0
let P2 = 0
let P1 = 0
let P0 = 0
// Variáveis P0, P1 e P2 para identificar se o pino foi ligado.
// 0 - desligado
// 1 - ligado
P0 = 0
P1 = 0
P2 = 0
// Variável que irá acumular a somatória dos valores durante uma rodada.
CoinSum = 0
// variável para controlar que uma nova rodada do jogo iniciou
StartGame = 0
basic.forever(function () {
    if (StartGame == 1) {
        P0 = 0
        P1 = 0
        P2 = 0
        if (input.pinIsPressed(TouchPin.P0)) {
            P0 = 1
        } else {
            P0 = 0
        }
        if (input.pinIsPressed(TouchPin.P1)) {
            P1 = 1
        } else {
            P1 = 0
        }
        if (input.pinIsPressed(TouchPin.P2)) {
            P2 = 1
        } else {
            P2 = 0
        }
        if (P0 == 1 && P1 == 1) {
            basic.showString("0.50")
            CoinSum = CoinSum + 0.5
            P0 = 0
            P1 = 0
        }
        if (P1 == 1 && P2 == 1) {
            basic.showString("0.10")
            CoinSum = CoinSum + 0.1
            P1 = 0
            P2 = 0
        }
        if (P2 == 1) {
            basic.showString("0.05")
            CoinSum = CoinSum + 0.05
            P2 = 0
        }
        if (P1 == 1) {
            basic.showString("0.25")
            CoinSum = CoinSum + 0.25
            P1 = 0
        }
        if (P0 == 1) {
            P0 = 0
            basic.showString("1.00")
            CoinSum = CoinSum + 1
        }
        basic.clearScreen()
        basic.pause(1000)
    }
})
