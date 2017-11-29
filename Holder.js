var dedupe = require('dedupe')

class Holder {
    constructor() {
        this._index = {}
        this._letterList = []
    }

    _addToLetterList(word) {
        var firstLetter = word.substr(0, 1)

        this._letterList.push(firstLetter)
        this._letterList = dedupe(this._letterList)
    }

    _addToIndex(word) {
        var firstLetter = word.substr(0, 1)

        if (!this._index[firstLetter]) {
            this._index[firstLetter] = []
        }

        this._index[firstLetter].push(word)
    }

    _getRandomElement(collection) {
        if (!collection || collection.length === 0) {
            return null
        }

        return collection[parseInt(Math.random() * collection.length, 10)]
    }

    getRandomByLetter(letter) {
        return this.getRandom(letter)
    }

    getRandom(letter) {
        if (!letter) {
            letter = this._getRandomElement(this._letterList)
        }

        return this._getRandomElement(this._index[letter])
    }

    addWord(word) {
        this._addToIndex(word)
        this._addToLetterList(word)
    }
}

module.exports = Holder