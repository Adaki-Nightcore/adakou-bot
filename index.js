const { Client, Collection } = require('discord.js');
const dotenv = require('dotenv');dotenv.config();
const mongoose = require('mongoose');
const client = new Client({ intents: 515 });
const Logger = require('./utils/Logger');

['commands', 'buttons'].forEach(x => client[x] = new Collection());
['CommandUtil', 'EventUtil', 'ButtonUtil'].forEach(handler => { require(`./utils/handlers/${handler}`)(client) });

process.on('exit', code => { Logger.client(`Le processus s'est arrêté avec le code: ${code}`) })

process.on('uncaughtException', (err, origin) => { 
    Logger.error(`UNCAUGHT_EXEPTION: ${err}`)
    console.error(`Origine: ${origin}`)
});

process.on('unhandledRejection', (reason, promise) => { 
    Logger.warn(`UNHANDLED_REJECTION: ${reason}\n-----\n`);
    console.log(promise);
});

process.on('warning', (...args) => Logger.warn(...args));

mongoose.connect(process.env.DATABASE_URI, {
    autoIndex: false, // Ne pas créer d'index
    maxPoolSize: 10, // Maintenir jusqu'à 10 prises de connexion
    serverSelectionTimeoutMS: 5000, // Continuez à essayer d'envoyer des opérations pendant 5 secondes
    socketTimeoutMS: 45000, // Fermer les sockets après 45 secondes d'inactivité
    family: 4 // Utilisez IPv4, évitez d'essayer IPv6
}).then(() => Logger.client('- connecté a la base de donné !' ))
.catch(err => { Logger.error(err); });

client.login(process.env.DISCORD_TOKEN);