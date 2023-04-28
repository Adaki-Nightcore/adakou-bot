const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'guildMemberAdd' ,
    once: false,
    async execute(client, member) {
        const embed = new MessageEmbed()
            .setAuthor({ name: `${member.user.tag} (${member.id})`, iconURL: member.user.displayAvatarURL() })
            .setColor('#6e4aff')
            .setDescription(`Bienvenue dans le serveur Adakou | ${member},
            Merci de prendre tes rôles 	<#948740494429667349> `)
            .setTimestamp()
            .setFooter({ text: 'L\'utilisateur a rejoint !' });

        const logChannel = client.channels.cache.get('948740494429667351');
        logChannel.send({ embeds: [embed] });
    },
};