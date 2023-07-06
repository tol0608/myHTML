var gugu = '<table>';

for (var num = 0; num <= 9; num++) {
    gugu += '<tr>';

    for (var dan = 2; dan <= 9; dan++) {
        if (num == 0) {
            gugu += '<th>' + dan + '단 </th>';
        } else {
            gugu += '<td>' + dan + ' * ' + num + ' = ' + (dan * num) + '</td>'
        }
    }
    gugu += '</tr>';
}
gugu += '</table>'

window.onload = function () {
    document.body.innerHTML += gugu;
    // inerHTML에 +=를 쓰면 어팬드가 됨

}