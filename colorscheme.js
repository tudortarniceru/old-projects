var color_scheme_nr = 3;
var color_scheme_name = ['', 'Dark Blue', 'Light Brown', 'Green'];

if (localStorage.getItem("color_scheme") == null) {
    localStorage.setItem("color_scheme", 1);
}

function change_color_scheme(nr) {
    localStorage["color_scheme"] = nr;
    document.getElementById("css").href = "style" + nr + ".css";
    show_color_schemes();
}

function show_color_schemes() {
    var txt = '';
    var current_color_scheme = localStorage.getItem("color_scheme");
    for (i = 1; i <= color_scheme_nr; ++i) {
        if (i == current_color_scheme) {
            txt += '<a class="dropdown-active" onclick="change_color_scheme(' + i + ')">' + color_scheme_name[i] + '</a>';
        }
        else {
            txt += '<a onclick="change_color_scheme(' + i + ')">' + color_scheme_name[i] + '</a>';
        }
    }
    document.getElementById("color_scheme_list").innerHTML = txt;
}

change_color_scheme(localStorage.getItem("color_scheme"));