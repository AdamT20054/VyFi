const {ButtonBuilder, ButtonStyle, ActionRowBuilder} = require('discord.js');
const {supportURL, gettingStartedURL, websiteURL} = require('./supportLinks.json');

function buildButtons(toggle = false, choice) {
    return new ActionRowBuilder().addComponents(
        new ButtonBuilder()
            .setLabel('Support')
            .setURL(supportURL)
            .setStyle(ButtonStyle.Link),
        new ButtonBuilder()
            .setLabel('Getting Started')
            .setURL(gettingStartedURL)
            .setStyle(ButtonStyle.Link),
        new ButtonBuilder()
            .setLabel('Website')
            .setURL(websiteURL)
            .setStyle(ButtonStyle.Link),
        new ButtonBuilder()
            .setLabel('Need more support?')
            .setCustomId('more')
            .setStyle(toggle === true && choice === 'red' ? 'Secondary' : 'Danger')
            .setDisabled(toggle),
    );
}

module.exports = {
    buildButtons
};