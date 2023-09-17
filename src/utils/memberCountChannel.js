async function memberCount(client) {
    // Fetch the voice channel 1014058147792556123 from guild 803763753429762098 and store it in a variable
    const channel = client.guilds.cache.get(`803763753429762098`).channels.cache.get(`1014058147792556123`);
    // Update the channel name to the current member count
    await channel.setName(`Members: ${client.guilds.cache.get(`803763753429762098`).memberCount}`);
}

module.exports = memberCount;