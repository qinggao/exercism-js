function SpaceAge(sec) {
    this.seconds = sec;

    var natEarth = sec / 31557600;;

    var planetYears = {
        onEarth: 1,
        onMercury: 0.2408467,
        onVenus: 0.61519726,
        onMars: 1.8808158,
        onJupiter: 11.862615,
        onSaturn: 29.447498,
        onUranus: 84.016846,
        onNeptune: 164.79132,
    }
    
    for (var x in planetYears) {
        SpaceAge.prototype[x] = calc(x);
    }

    function calc(planet) {
        return function() {
            return parseFloat((natEarth / planetYears[planet]).toFixed(2));
        }
    }
}

module.exports = SpaceAge;