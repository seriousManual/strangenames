const Holder = require('./Holder')

let adjectives = new Holder()
let nouns = new Holder()

require('./resources/nouns.json').forEach(word => nouns.addWord(word.trim().toLowerCase()))
require('./resources/adjectives.json').forEach(word => adjectives.addWord(word.trim().toLowerCase()))

function getName() {
  return build(adjectives.getRandom(), nouns.getRandom())
}

function getAlliteration(letter) {
  let adjective = adjectives.getRandom(letter)
  let firstLetter = adjective.substr(0, 1)
  let noun = nouns.getRandom(firstLetter)

  return build(adjective, noun)
}

function build(adjective, noun) {
  return `${adjective} ${noun}`
}

module.exports = {getName, getAlliteration}