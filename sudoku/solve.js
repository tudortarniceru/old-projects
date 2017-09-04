function solve() {
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