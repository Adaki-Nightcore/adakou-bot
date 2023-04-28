const mongoose = require('mongoose');

const guildShema = mongoose.Schema({
    id: String,
    prefix: { 'type': String, 'default': 'a.' },
    logChannel: { 'type': String, 'default': '960489972903841792' },
})

module.exports = mongoose.model('Guild', guildShema);