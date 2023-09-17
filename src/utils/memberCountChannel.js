async function memberCount(client) {
    const channel = client.guilds.cache.get(`803763753429762098`).channels.cache.get(`1014058147792556123`);
    await channel.setName(`Members: ${client.guilds.cache.get(`803763753429762098`).memberCount}`);
}

module.exports = memberCount;