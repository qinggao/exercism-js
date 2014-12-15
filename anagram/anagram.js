anagram = function(input) {

    var result = {
        matches: function(arr) {
            if (arguments == []) {
                return [];
            }
            var temp = [];
            if (arguments.length > 1) {
                for (var i = 0; i < arguments.length; i++) {
                    temp[i] = arguments[i];
                }
            } else temp = arr;
            var match = [];
            var x;
            var temp1 = input.toLowerCase().split("");

            //for each words in array
            for (var i = 0; i < temp.length; i++) {

                if (input.toLowerCase() == temp[i].toLowerCase()) {
                    continue;
                }

                var temp2 = temp[i].toLowerCase().split("");

                if (temp1.sort().toString() == temp2.sort().toString()) {
                    match.push(temp[i]);
                }
            }
            return match;
        }
    }
    return result;
}

module.exports = anagram;