const {ButtonBuilder, ButtonStyle, ActionRowBuilder} = require('discord.js');
const {gettingStartedURL, websiteURL} = require('./priceLinks.json');

function buildButtons(toggle = false, choice) {
    return new ActionRowBuilder().addComponents(
        new ButtonBuilder()
            .setLabel('Website')
            .setURL(websiteURL)
            .setStyle(ButtonStyle.Link),
        new ButtonBuilder()
            .setLabel('Getting Started')
            .setURL(gettingStartedURL)
            .setStyle(ButtonStyle.Link),
        new ButtonBuilder()
            .setLabel('Refresh Price')
            .setCustomId('refresh')
            .setStyle(toggle === true && choice === 'red' ? 'Secondary' : 'Danger')
    )
}

module.exports = {
    buildButtons
};