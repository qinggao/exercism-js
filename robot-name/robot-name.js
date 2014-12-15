function Robot(){
    
    var newName = function() {
        var n = "";
        for (var i = 0; i < 2; i++) {
            var temp = Math.floor(Math.random() * 26 + 65);
            n += String.fromCharCode(temp);
        }
        for (var i = 0; i < 3; i++) {
            n += Math.floor(Math.random() * 10).toString();
        }

        
        return n;
    }

    if (!this.name){
        this.name = newName();
    }

    this.reset = function() {
        delete this.name;
    }
}


module.exports = Robot;