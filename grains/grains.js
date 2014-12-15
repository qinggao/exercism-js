function Grains() {
    
    return {
        square: function(sqr) {
            return Math.pow(2, sqr-1);
        },

        total: function() {
            var t = 0;
            for (var i = 1; i <= 64; i++) {
                t += this.square(i);
            }
            return t;
        }
    }
}

module.exports = Grains;