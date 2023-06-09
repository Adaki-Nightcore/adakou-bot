module.exports = {
    name: 'unmute' ,
    category: 'moderation',
    permissions: ['MODERATE_MEMBERS'],
    ownerOnly: false,
    usage: 'unmute [@member]',
    examples: ['unmute @user', ],
    description: 'Démute un utilisateur temporairement avec une raison',
    async run(client, message, args) {
        if (!args[0]) return message.reply("Spécifié un membre à démute !");

        const target = message.mention.members.find(m => m.id);

        if(!target.isCommunicationDisable()) return message.reply('Ce membre ne peux pas être démute par le bot car il n\' pas mute!')

        target.timeout(null);
        message.channel.send(`Le membre ${target} a été démute!`);
    },
    options: [
        {
            name: 'target',
            description: 'L\'utilisateur a mute ',
            type: 'USER',
            required: true,
        },
    ],
    async runInteraction(client, interaction) {
        const target = interaction.options.getMember('target');

        if(!target.isCommunicationDisabled()) return interaction.reply('Ce membre ne peux pas être démute par le bot car il n\'est pas mute!')

        target.timeout(null);
        interaction.reply(`Le membre ${target} a été démute!`);
    }
};
