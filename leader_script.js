$.get('file_to_read.txt', function (data) {
    $("#leaders").innerHTML = data;
}, 'text');