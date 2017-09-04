//0 - line
//1 - collumn
//2 - zone
var freq = [];
for (var i = 0; i <= 3; ++i) {
    freq[i] = [];
    for (var j = 0; j <= 9; ++j) {
        freq[i][j] = [];
        for (var k = 0; k <= 9; ++k) {
            freq[i][j][k] = 0;
        }
    }
}

function update_freq() {
    for (var i = 0; i < 3; ++i) {
        for (var j = 0; j < 9; ++j) {
            for (var k = 1; k <= 9; ++k) {
                freq[i][j][k] = 0;
            }
        }
    }
    for (var i = 0; i < 9; ++i) {
        for (var j = 0; j < 9; ++j) {
            var el = table[i][j];
            freq[0][i][el]++;
            freq[1][j][el]++;
            freq[2][zones[i][j]][el]++;
        }
    }
}

function get_values() {
    que_size = 0;
    var string = document.getElementById("input_values").value;
    var digit_nr = -1;
    for (var i = 0; i < string.length; ++i) {
        if (string[i] >= '0' && string[i] <= '9') {
            digit_nr++;
        }
    }
    if (digit_nr != 80) {
        document.getElementById("ok").innerHTML = "Invalid";
    }
    else {
        digit_nr = -1;
        for (var i = 0; i < string.length; ++i) {
            if (string[i] >= '0' && string[i] <= '9') {
                digit_nr++;
                var lin = Math.floor(digit_nr / 9);
                var col = digit_nr % 9;
                var the_number = Number(string[i]);
                table[lin][col] = the_number;
                if (the_number == 0) {
                    queue[0][que_size] = lin;
                    queue[1][que_size] = col;
                    que_size++;
                }
            }
        }
        update_freq();
        check_ok();
        show_table();
    }
}

function show_table() {
    for (i = 0; i < 9; ++i) {
        for (j = 0; j < 9; ++j) {
            document.getElementById("el_" + i + j).innerHTML = table[i][j];
        }
    }
}