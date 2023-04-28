const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'guildMemberRemove' ,
    once: false,
    async execute(client, member) {
        const fetchKickLog = await member.guild.fetchAuditLogs({
            limit: 1,
            type: 'MEMBER_KICK'
        });

        const kickLog = fetchKickLog.entries.first();
        const { target, reason } = kickLog;
        let isMemberKick = false;

        if (target.id === member.id) isMemberKick = true;

        const embed = new MessageEmbed()
            .setAuthor({ name: `${member.user.tag} (${member.id})`, iconURL: member.user.displayAvatarURL() })
            .setColor('#6e4aff')
            .setDescription(`± Nom d'utilisateur: ${member.displayName}
            ± Créé le: <t:${parseInt(member.user.createdTimestamp / 1000)}:R> (<t:${parseInt(member.user.createdTimestamp / 1000)}:R>)
            ± Rejoint le: <t:${parseInt(member.joinedTimestamp / 1000)}:R> (<t:${parseInt(member.joinedTimestamp / 1000)}:R>)
            ± Quitté le: <t:${parseInt(Date.now() / 1000)}:R> (<t:${parseInt(Date.now() / 1000)}:R>)
            ± Kick: ${isMemberKick ? `🟢 (raison: ${reason})` : '🔴'}
            `)
            .setTimestamp()
            .setFooter({ text: 'L\'utilisateur a quitté !' });

        const logChannel = client.channels.cache.get('960489972903841792');
        logChannel.send({ embeds: [embed] });
    },
};
