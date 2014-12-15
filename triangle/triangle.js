function Triangle(s1, s2, s3) {
    this.kind = function() {
        if ((s1 + s2 + s3) / 2 <= Math.max(s1, s2, s3) || Math.min(s1, s2, s3) == 0) {
            throw "Invalid";
        }
        var res = ["equilateral", "isosceles", "scalene"];
        if (s1 == s2 || s2 == s3 || s1 == s3) {
            if ((s1 + s2 + s3) / 3 == s1){
                return res[0];
            } else return res[1];
        } else return res[2];
    }
}

module.exports = Triangle;