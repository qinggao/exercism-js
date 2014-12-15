school = function() {
    var list = [];
    return {
        roster: function() {
            return list;
        },

        add: function(name, grade) {
            if (!list[grade]){
                list[grade] = [name];
            } else {
                list[grade].push(name);
                list[grade].sort();
            }
            return this.roster;
        },

        grade: function(grade) {
            if (list[grade]) {
                return list[grade];
            } else return [ ];
        }
    }
}

module.exports = school;