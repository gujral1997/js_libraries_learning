const Immutable = require('immutable');

var map1 = Immutable.Map({a:1, b:2, c:3});
var map2 = map1.set('b', 50)
var map3 = [1, 2, 3]

console.log(map1)
console.log(map2)
console.log(map2.get('b'))
console.log(Immutable.Map.isMap(map2))
console.log(Immutable.Map.isMap(map3))