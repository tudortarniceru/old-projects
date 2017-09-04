function check_ok() {
    for (var i = 0; i < 3; ++i) {
        for (var j = 0; j < 9; ++j) {
            for (var k = 1; k <= 9; ++k) {
                if (freq[i][j][k] > 1) {
                    document.getElementById("ok").innerHTML = "No";
                    return 0;
                }
            }
        }
    }
    document.getElementById("ok").innerHTML = "Ok";
    return 1;
}

function check_table() {
    update_freq();
    check_ok();
}