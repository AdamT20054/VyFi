const {EmbedBuilder} = require('discord.js');
const {thumbnailURL, footerIconURL, githubURL} = require('./priceLinks.json');

function buildPriceEmbed(priceUSD, priceADA) {
    return new EmbedBuilder()
        .setTitle('VyFi Price')
        .setFields(
            {name: "Current USD Price", value: `$${priceUSD}`},
            {name: "Current ADA Price", value: `${priceADA}₳`},
            {name: "Total Supply", value: `450,000,000VyFi`},
        )
        .setColor('#03fcdb')
        .setThumbnail(thumbnailURL)
        .setTimestamp()
        .setFooter({text: githubURL, iconURL: footerIconURL});
}


module.exports = {
    buildPriceEmbed

};
