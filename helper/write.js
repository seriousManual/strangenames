const fs = require('fs')

const content = fs.readFileSync('./resources/adjectives.txt', {encoding: 'utf8'})

const list = content.toString()
    .split('\n')
    .map(word => word.trim().toLowerCase())

fs.writeFileSync('./adjectives.json', JSON.stringify(list), {encoding: 'utf8'})