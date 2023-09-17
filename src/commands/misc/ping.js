const {PermissionFlagsBits} = require("discord.js");
module.exports = {
    name: 'ping',
    description: 'Pong!',
    devOnly: true,
    testOnly: true,
    deleted: false,
    options: [],
    permissionsRequired: [],
    botPermissions: [],

    callback: (client, interaction) => {
        interaction.reply(`Ping: ${client.ws.ping}ms`);
    }
}