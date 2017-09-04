var table = [];
var solved_table = [];
var zones = [];
var queue = [[], []]
var que_size = 0;
var current = 0;
for (var i = 0; i <= 9; ++i) {
    table[i] = [];
    solved_table[i] = [];
    zones[i] = [];
    for (var j = 0; j <= 9; ++j) {
        table[i][j] = 0;
        solved_table[i][j] = 0;
        zones[i][j] = 0;
    }
}

function add_main() {
    var get = "";
    for (var i = 0; i < 9; ++i) {
        get += "<div id='main_" + i + "' class='main_add'></div>";
        if (i == 2 || i == 5) {
            get += "<br>";
        }
    }
    document.getElementById("main").innerHTML = get;
}

function add_sub() {
    for (var i = 0; i < 9; ++i) {
        var get = "";
        for (var j = 0; j < 9; ++j) {
            var coordx = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            var coordy = i % 3 * 3 + j % 3;
            get += "<div class='sub_add'><div id='el_" + coordx + coordy + "' class='number_add'></div></div>";
            if (j == 2 || j == 5) {
                get += "<br>";
            }
            zones[coordx][coordy] = i;
        }
        document.getElementById("main_" + i).innerHTML = get;
    }
}

function init_input_area() {
    var input_area = "";
    for (var i = 0; i < 9; ++i) {
        for (var j = 0; j < 9; ++j) {
            input_area += '0';
            if (j < 8) {
                input_area += " ";
            }
        }
        if (i < 8) {
            input_area += '\n';
        }
    }
    document.getElementById("input_values").value = input_area; 
}

function sudoku_start() {
    show_color_schemes();
    add_main();
    add_sub();
    init_input_area();
}
