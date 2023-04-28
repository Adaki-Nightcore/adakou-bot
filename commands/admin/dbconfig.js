module.exports = {
    name: 'dbconfig' ,
    category: 'admin',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: true,
    usage: 'dbconfig [key] <value>',
    examples: ['dbconfig', 'dbconfig prefix ?', 'dbconfig prefix'],
    description: 'Configurer les données de la base de données',
    async run(client, message, args, guildSettings) {
        if (!args[0] || !args[0].match(/^(prefix|logChannel)$/)) 
            return message.reply('Merci d\'entrer une clé valide (\`prefix\`/\`logChannel`)');
        const value = args[1];

        if (args[0] == 'prefix') {
            if (value) {
                await client.updateGuild(message.guild, { prefix: value })
                return message.reply({ content: `Nouvelle valeur de préfix: ${value}` });
            }
            message.reply({ content: `Valeur de préfix: ${guildSettings.prefix}` });
        } else if (args[0] == 'logChannel') {
            if (value) {
                await client.updateGuild(message.guild, { logChannel: value })
                return message.reply({ content: `Nouvelle valeur de logChannel: ${value}` });
            }
            message.reply({ content: `Valeur de logChannel: ${guildSettings.prefix}` });
        }
    },
    options: [
        {
            name: 'key',
            description: 'Choisir une clé à modifier ou afficher',
            type: 'STRING',
            required: true,
            choices: [
                {
                    name: 'prefix',
                    value: 'prefix',
                },
                {
                    name: 'logChannel',
                    value: 'logChannel',
                },
            ]
        },
    ],
    async runInteraction(client, interaction, guildSettings) {
        const key = interaction.options.getString('key');

        if (key == 'prefix') {
            interaction.reply({ content: `Valeur de préfix: ${guildSettings.prefix}` });
        } else if (key == 'logChannel') {
            interaction.reply({ content: `Valeur de logChannel: ${guildSettings.logChannel}` });
        }
    }
};