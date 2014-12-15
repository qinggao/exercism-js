dna = function(strand) {

    if(strand == null) {
        var temp = [];
    }else if (! /^[ATCG]*$/i.test(strand)) {
        throw "Invalid";
    }else var temp = strand.split("");

    return {
        count: function(input) {
            var c = 0;
            for (var i = 0; i < temp.length; i++) {
                if (input == temp[i]) {
                    c++;
                }
            }
            return c;
        },

        histogram: function() {
            var tally = {A: 0, T: 0, C: 0, G: 0};
            for (var i in tally) {
                tally[i] = this.count(i);
            }

            return tally;
        },

    }
}

module.exports = dna;