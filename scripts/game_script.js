function addScore(player) {
    $.ajax({
        type: 'POST',
        url: "../leaders.php",
        data: {player: player},
    })
    clean()
}

let player1, player2, currentPlayer
for (let i = 0; i < 9; i++) {
    $('.board').append($('<button/>', {class: "tile", tile: i, onclick: "move(this)"}))
}

function startGame() {
    player1 = $('#first_player').val()
    player2 = $('#second_player').val()
    if (player1 === "")
        player1 = "Player 1"
    if (player2 === "")
        player2 = "Player 2"
    currentPlayer = true
    $('.players').hide()
    $('.board').show()
    $('#back').show()
    $('#player_move').html("Ход игрока: " + (currentPlayer ? player1 + " (X)" : player2 + " (0)")).css("color", "rgb("
        + [Math.floor((Math.random() * 256)), Math.floor((Math.random() * 256)), Math.floor((Math.random() * 256))] + ")")
}

function move(button) {
    button = $(button)
    if (button.html() === "") {
        if (currentPlayer)
            button.html("X")
        else
            button.html("0")
        check((currentPlayer ? player1 : player2))
        currentPlayer = !currentPlayer
        $('#player_move').html("Ход игрока: " + (currentPlayer ? player1 + " (X)" : player2 + " (0)")).css("color",
            "rgb(" + [Math.floor((Math.random() * 256)), Math.floor((Math.random() * 256)), Math.floor((Math.random() * 256))] + ")")
    } else {
        alert("Нельзя выбирать уже выбранные плитки")
    }
}

function clean() {
    let tiles = $('.tile')
    for (let i = 0; i < 9; i++) {
        $(tiles[i]).html("")
    }
}

function check(player) {
    let tiles = $('.tile')
    if ($(tiles[0]).html() === $(tiles[1]).html() && $(tiles[1]).html() === $(tiles[2]).html() && $(tiles[2]).html() !== "")
        addScore(player)
    if ($(tiles[3]).html() === $(tiles[4]).html() && $(tiles[4]).html() === $(tiles[5]).html() && $(tiles[5]).html() !== "")
        addScore(player)
    if ($(tiles[6]).html() === $(tiles[7]).html() && $(tiles[7]).html() === $(tiles[8]).html() && $(tiles[8]).html() !== "")
        addScore(player)
    if ($(tiles[0]).html() === $(tiles[3]).html() && $(tiles[3]).html() === $(tiles[6]).html() && $(tiles[6]).html() !== "")
        addScore(player)
    if ($(tiles[1]).html() === $(tiles[4]).html() && $(tiles[4]).html() === $(tiles[7]).html() && $(tiles[7]).html() !== "")
        addScore(player)
    if ($(tiles[2]).html() === $(tiles[5]).html() && $(tiles[5]).html() === $(tiles[8]).html() && $(tiles[8]).html() !== "")
        addScore(player)
    if ($(tiles[0]).html() === $(tiles[4]).html() && $(tiles[4]).html() === $(tiles[8]).html() && $(tiles[8]).html() !== "")
        addScore(player)
    if ($(tiles[2]).html() === $(tiles[4]).html() && $(tiles[4]).html() === $(tiles[6]).html() && $(tiles[6]).html() !== "")
        addScore(player)
}

function back() {
    clean()
    $('.players').show()
    $('.board').hide()
    $('#back').hide()
}