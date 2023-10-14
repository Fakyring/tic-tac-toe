function addScore(player) {
    $.ajax({
        type: 'POST',
        url: "write.php",
        data: {something: 'foo'}, // key value pair created, 'something' is the key, 'foo' is the value
    })
}