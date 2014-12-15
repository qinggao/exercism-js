var parts = [" bottles of beer on the wall, ",
    " bottles of beer.\nTake one down and pass it around, ",
    " bottles of beer on the wall.\n"
]

var partTwo = [" bottles of beer on the wall, ",
    " bottles of beer.\nTake one down and pass it around, ",
    " bottle of beer on the wall.\n"
]

var partOne = [" bottle of beer on the wall, ",
    " bottle of beer.\nTake it down and pass it around, ",
    "no more bottles of beer on the wall.\n"
]

var partZero = "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n";

var Beer = {

    verse: function(x) {
        if (x > 2) {
            var result = x + parts[0] + x + parts[1] + (x-1) + parts[2];
        } else if (x == 2) {
            var result = x + partTwo[0] + x + partTwo[1] + (x-1) + partTwo[2];
        } else if (x == 1) {
            var result = x + partOne[0] + x + partOne[1] + partOne[2];
        } else if (x == 0) {
            var result = partZero;
        }
        return result;
    },

    sing: function(x) {
        var result = "";
        var start = arguments[0];
        var end = 0;
        if (arguments.length > 1) {
            end = arguments[1];
        }
        for (var i = start; i >= end; i--) {
            if (result != "") {
                result += "\n";
            }
            result += this.verse(i);
        }
        return result;
    }

}

module.exports = Beer;