function solve() {
    if (check_ok() == 0) {
        window.alert("The table must be valid to solve it!");
    }
    else {
        var ok_freq = 0;
        var nr_freq = 15;
        for (var i = 1; i <= 9; ++i) {
            for (var j = 1; j <= 9; ++j) {
                ok_freq += table[i][j];
            }
        }
        if (ok_freq < nr_freq) {
            window.alert("The table must have at least " + nr_freq + " non-zero values!");
        }
        else {
            current = 0;
            for (var i = 0; i <= 9; ++i) {
                for (var j = 0; j <= 9; ++j) {
                    solved_table[i][j] = 0;
                }
            }
            back();
            for (var i = 0; i < 9; ++i) {
                for (var j = 0; j < 9; ++j) {
                    table[i][j] = solved_table[i][j];
                }
            }
        }
    }
}
function back() {
    if (current == que_size) {
        show_table();
        for (var i = 0; i < 9; ++i) {
            for (var j = 0; j < 9; ++j) {
                solved_table[i][j] = table[i][j];
            }
        }
    }
    else {
        var lin = queue[0][current];
        var col = queue[1][current];
        for (var val = 1; val <= 9; ++val) {
            table[lin][col] = val;
            freq[0][lin][val]++;
            freq[1][col][val]++;
            freq[2][zones[lin][col]][val]++;
            current++;

            if (freq[0][lin][val] > 1 || 
                freq[1][col][val] > 1 || 
                freq[2][zones[lin][col]][val] > 1) {

            }
            else {
                back();
            }

            table[lin][col] = 0;
            freq[0][lin][val]--;
            freq[1][col][val]--;
            freq[2][zones[lin][col]][val]--;
            current--;
        }
    }
}