word_count = function(input) {

    var inArr = input.split(/\s+/);
    var result = {};
    
    //cycle until array run out of words
    while (inArr != "") {
        var c = 1;
        var temp = inArr.shift();
        
        //cycle through and compare each word
        for (var i = 0; i < inArr.length; i++) {
            if (temp == inArr[i]){
                c++;
                inArr.splice(i, 1);
            }
        }

        result[temp] = c;

    }
    //add ending bracket
    return result;

};

module.exports = word_count;