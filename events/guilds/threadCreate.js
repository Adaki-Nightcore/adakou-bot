module.exports = {
    name: "threadCreate",
    once: false,
    async execute(client, thread) {
        if (thread.isText()) thread.join();
        const logChannel = client.channels.cache.get('960757344181055519');
        logChannel.send(`Nom du thread: ${thread.name} !`);
    }
}