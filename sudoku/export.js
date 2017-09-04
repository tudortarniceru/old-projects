function export_values() {
    var export_text = "";
    for (var i = 0; i < 9; ++i) {
        for (var j = 0; j < 9; ++j) {
            export_text += table[i][j];
            if (j < 8) {
                export_text += " ";
            }
        }
        if (i < 8) {
            export_text += '\n';
        }
    }
    document.getElementById("input_values").value = export_text;    
}