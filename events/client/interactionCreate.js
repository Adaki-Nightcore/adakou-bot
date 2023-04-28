const ownerId = '658086830926987305';

module.exports = {
    name: 'interactionCreate' ,
    once: false,
    async execute(client, interaction) {
        if (interaction.isCommand() || interaction.isContextMenu()) {
            const cmd = client.commands.get(interaction.commandName);
            if (!cmd) return interaction.reply('Cette commande n\'existe pas !');

            if (cmd.ownerOnly) {
                if(interaction.user.id != ownerId) return message.reply('La seul personne pouvant taper cette commande est l\'owner du bot !');
            }

            if (!interaction.member.permissions.has([cmd.permissions])) return interaction.reply({ content: `Vous avez pas la/les permission(s) requise(s) (\`${cmd.permissions.join(', ')}\`) pour taper cette commande !`, ephemeral: true });

            cmd.runInteraction(client, interaction);
        } else if (interaction.isButton()) {
          const btn = client.buttons.get(interaction.customId);
          if (!btn) return interaction.reply('Ce button n\'existe pas !');
          btn.runInteraction(client, interaction);
        }
    },
};
