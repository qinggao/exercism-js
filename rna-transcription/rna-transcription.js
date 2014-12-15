dna = function(strand) {
    var temp = strand.split("");

    for (var x in temp) {
        switch (temp[x]) {
            case "G":
                temp[x] = 'C';
                break;
            case "C":
                temp[x] = "G";
                break;
            case "T":
                temp[x] = "A";
                break;
            case "A":
                temp[x] = "U";
                break;
        }
    }

    return temp.join("");
}

module.exports = dna;