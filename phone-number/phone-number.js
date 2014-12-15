phone = function(str) {
    return {
        number: function() {
            var num = str.match(/\d/g);
            if (num.length == 10 || (num.length == 11 && num.slice(0, 1) == "1")) {
                if (num.length == 11) {
                    num.shift();
                }
                return num.join("");
            }else return "0000000000";
        },

        areaCode: function() {
            return this.number().slice(0, 3);
        },

        toString: function() {
            var temp = str.match(/\d/g);
            var result = "(" + this.areaCode() + ") ";
            for (var i = 3; i < 10; i++) {
                if (i == 6) {
                    result += "-";
                }
                result += temp[i];
            }
            return result;
        }
    }

}

module.exports = phone;