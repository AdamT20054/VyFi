const {EmbedBuilder} = require('discord.js');

function buildSupportEmbed() {
    return new EmbedBuilder()
        .setTitle('Need Support?')
        .setDescription(`If you need help, check out our \`support\` button on this message to read our FAQ on common issues and how to fix them!`)
        .setColor('#03fcdb')
        .setThumbnail("https://app.vyfi.io/images/vyfi-logo.png");
}

function buildFurtherSupportEmbed() {
    return new EmbedBuilder()
        .setTitle('Need further Support?')
        .setDescription(`Please contact <@&939283204618190878> in the support channel with an explanation of the issue, and they will get back to you shortly.`)
        .setColor('#03fcdb')
        .setThumbnail("https://app.vyfi.io/images/vyfi-logo.png");
}

module.exports = {
    buildSupportEmbed,
    buildFurtherSupportEmbed,
};
