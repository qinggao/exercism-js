var hamming = {

    compute: function(input1, input2) {

        var arr1 = input1.split("");
        var arr2 = input2.split("");
        var c = 0;

        for (var i = 0; i < arr1.length; i++) {
            if (arr1[i] != arr2[i]){
                c++;
            }
        }

        return c;
    }
}
module.exports = hamming;