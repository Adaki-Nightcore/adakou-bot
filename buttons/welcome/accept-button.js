const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'accept-button',
    async runInteraction(client, interaction) {
        await interaction.member.send(
          new MessageEmbed()
          .setDescription(`bla bla bla `),
        )
        await interaction.member.roles.add('948740493725024313');
        await interaction.reply({ content: 'bla bla', ephemeral: true });
    }
}; 