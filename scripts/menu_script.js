function leaders() {
    let features = "left=700,top=200,width=150,height=500"
    let leadersBoard = window.open('', 'name', features)
    leadersBoard.resizeTo(30, 500)
    leadersBoard.document.write('<html><head><title>Leadersboard</title>')
    leadersBoard.document.write('<link rel="stylesheet" href="menu.css" type="text/css"/></head>')
    $.get('leaderboard.txt', function (data) {
        let result = "<body><div class='leaders'>"
        leadersBoard.document.write(JSON.parse(data, (key, value) => {
            if (typeof key !== "undefined" && typeof value === "number") {
                result += "<span>" + key + ": " + value + "</span>"
            }
            else
                return result + "</div>"
        }))
    })
    leadersBoard.document.write('</body></html>');
}
