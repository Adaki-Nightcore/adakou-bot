const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

const buttons = new MessageActionRow()
    .addComponents(
        new MessageButton()
            .setCustomId('accept-button')
            .setLabel('✅ Accepter le règlement')
            .setStyle('SUCCESS'),
    )

const welcomeEmbed = new MessageEmbed()
        .setTitle("**Règlement du serveur 'Adakou !**")
        .setDescription(`
        **__Partie I : Comportement à avoir__**
        ・Vous devez être respectueux et poli entre vous, ici règne seulement la bonne humeur.
        
        ・Interdiction d'insulter un membre du serveur sauf si c'est pour rigoler entre vous (taquinerie autorisée).
        
        ・Interdiction de divulguer des informations personnelles sur n'importe quel membre sous peine d'un ban et d'un signalement à l'équipe Discord.
        
        ・Vous devez bien sûr respecter le TOS DE DISCORD : https://discord.com/terms
        
        **__Partie II : Salons Textuels et Vocaux__**
        
        ・Interdiction de spammer sous peine d'une sanction selon votre spam.
        
        ・Aucun contenu NSFW est accepté ici, allez voir autre part !
        
        ・Interdiction de faire sa pub sur les tchats.
        
        ・Interdiction d'utiliser un Soundboard ou un modificateur de voix sur le serveur.
        
         **__Partie III : Votre Profil__**
        
        ・Ne dois pas contenir de propos déplacés et interdits (racistes, homophobes, NSFW, etc.) sous peine d'un ban définitif.
        
        ・Votre Photo d'utilisateur doit être réglementaire.
        
        ・Votre Pseudo ne doit pas être le même qu'un membre de la modération pour éviter toute confusion. Vous serez prévenus si c'est le cas en MP.
        
        Partie IV : Modération
        
        ・Interdiction de ping un créateur du serveur (même si problème)
        
        ・Interdiction de ping un staff pour rien (sauf raison valable)
        
        ・Vous devez vous adresser seulement aux Admins ou aux Community Manager pour faire un partenariat !`)
        .setImage('https://cdn.discordapp.com/attachments/781389767974584402/960492197231349770/BDAC176F-D7BC-4481-8A2A-2166CA72438E.gif')
        .setFooter({ text: 'Bienvenue sur le serveur' })
        .setTimestamp()

module.exports = {
    name: 'welcome' ,
    category: 'utils',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'welcome',
    examples: ['welcome'],
    description: 'La commande welcome permet d\'envoyer l\'embed des règles',
    async run(client, message, args) {
        await message.channel.send({ embeds: [welcomeEmbed], components: [buttons] });
    },
    async runInteraction(client, interaction) {
        await interaction.reply({ embeds: [welcomeEmbed], components: [buttons] });
    }
};