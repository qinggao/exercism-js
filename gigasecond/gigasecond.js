function Gigasecond(start) {
    var d1 = start.getTime();
    return {
        date: function() {
            var temp = new Date(d1 + Math.pow(10, 12))
            var anni = new Date(0);
            anni.setDate(temp.getDate());
            anni.setMonth(temp.getMonth());
            anni.setFullYear(temp.getFullYear());
            anni.setHours(0);
            return anni;

        }
    }
}

module.exports = Gigasecond;