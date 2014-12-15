var Clock = {

    at: function(num) {
        var hour = arguments[0];
        var minute = arguments[1];
        var time = [hour, minute];
        this.result = "";
        if (time[0] < 10)
            this.result += "0";
        this.result += time[0] + ":";
        if (time[1]) {
            if (time[1] < 10)
                this.result += "0";
            this.result += time[1];
        } else this.result += "00";

        return {
            return this.result;
        
            var plus = function(add) {
                var temp = this.result.split(":");
                temp = temp.map(function(x){return parseInt(x);})
                temp[1] += add;
                while (temp[1] > 60) {
                    temp[1] -= 60;
                    temp[0]++;
                }
                if (temp[0] > 23) {
                    temp[0] -= 24;
                }
                return "0";
            }

        }
    }

}

module.exports = Clock;