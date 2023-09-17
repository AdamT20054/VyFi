const {PermissionFlagsBits} = require("discord.js");
module.exports = {
    name: 'ping',
    description: 'Pong!',
    devOnly: false,
    testOnly: false,
    deleted: false,
    options: [],
    permissionsRequired: [PermissionFlagsBits.SendMessages],
    botPermissions: [PermissionFlagsBits.SendMessages],

    callback: (client, interaction) => {
        interaction.reply({content: `🏓 Pong! Latency: **${Math.round(client.ws.ping)} ms**`})
    }
}