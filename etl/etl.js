var transform = function(old) {
    var newScore = {};
    for (var i in old) {
        var temp = old[i];
        for (var j in temp) {
            newScore[temp[j].toLowerCase()] = parseInt(i);
        }
    }
    return newScore;
}

module.exports = transform;