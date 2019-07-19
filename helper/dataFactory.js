const Chance = require('chance')

let chance = new Chance()

const payload = {
    "id": chance.integer(),
    "firstName": chance.first(),
    "address": chance.city()
}


module.exports = { 
    payload
}