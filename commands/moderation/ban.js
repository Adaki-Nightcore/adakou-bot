module.exports = {
    name: 'ban' ,
    category: 'moderation',
    permissions: ['BAN_MEMBERS'],
    ownerOnly: false,
    usage: 'ban [@member] [reason]',
    examples: ['ban @user il aimait pas les lolis !', ],
    description: 'Bannir un utilisateur avec une raison',
    async run(client, message, args) {
        if (!args[0]) return message.reply("Spécifié un membre à ban !");
        if (!args[1]) return message.reply("Spécifié une raison à votre kick !");

        const target = message.mention.members.find(m => m.id);
        const reason = args.slice(1).join(' ');

        if(!target.bannable) return message.reply('Ce membre ne peux pas être ban par le bot !')

        target.ban({ reason });
        message.channel.send(`Le membre ${target} a été ban !`);
    },
    options: [
        {
            name: 'target',
            description: 'L\'utilisateur a ban ',
            type: 'USER',
            required: true,
        },
        {
            name: 'reason',
            description: 'La raison du ban',
            type: 'STRING',
            required: true,
        },
    ],
    async runInteraction(client, interaction) {
        const target = interaction.options.getMember('target');
        const reason = interaction.options.getString('reason');

        if(!target.bannable) return interaction.reply('Ce membre ne peux pas être ban par le bot !')

        target.ban({ reason });
        interaction.reply(`Le membre ${target} a été ban !`);
    }
};
