const Logger = require('../../utils/Logger');

module.exports = {
    name: 'ready' ,
    once: true,
    async execute(client) {
        const statusArray = [
            {
                type: 'WATCHING',
                content: 'Spy x Family',
                status: 'online'
            },
            {
                type: 'WATCHING',
                content: 'Spy x Family',
                status: 'dnd'
            },
            {
                type: 'WATCHING',
                content: 'Spy x Family',
                status: 'idle'
            },
            {
                type: 'STREAMING',
                content: 'Spy x Family',
                url: 'https://www.twitch.tv/'
            },
    ];

    async function pickPresence() {
        const option = Math.floor(Math.random() * statusArray.length)

        try {
            await client.user.setPresence({
                activities: [
                    {
                        name: statusArray[option].content,
                        type: statusArray[option].type
                    },
                ],
                status: statusArray[option].status
            });
        } catch (error) {
            console.error(error);
        }
    }

    setInterval(pickPresence, 1 * 1000);
        
        let guildsCount = await client.guilds.fetch();
        let userCount = client.guilds.cache.reduce((a, g) => a + g.memberCount, 0);

        Logger.client(`- prêt a être utilisé par ${userCount} utilisateurs sur ${guildsCount.size} serveurs !`);
        
        client.application.commands.set(client.commands.map(cmd => cmd));
    },
};