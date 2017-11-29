# strange names
Returns strange names like `zealous airport` or `amazing example`.

## getName()
Returns a random combination

## getAlliteration([letter])
Returns a alliteration like `vicious vermicelli`.
Via the optional parameter `letter` the first letter can be defined.

## example
````
const strangeNames = require('strangeNames')

console.log(strangeNames.getName())
console.log(strangeNames.getAlliteration())
console.log(strangeNames.getAlliteration('a'))
````