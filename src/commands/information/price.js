const {PermissionFlagsBits} = require('discord.js');
const axios = require('axios');

const priceButtons = require('../../utils/commandutils/price/priceButtons');
const priceEmbeds = require('../../utils/commandutils/price/priceEmbeds');

// THIS FILE IS TEMPORARY, IT WILL BE REPLACED AND UPDATED VERY SOON.
// The changes required to get this command "flush" with the rest of the
// project require me to make a few changes to my database to accommodate
// the new features. I will be working on this soon, but for now, this
// command will be a placeholder.

module.exports = {
    name: 'price',
    description: "Get VyFi's current price and common conversions!",
    devOnly: false,
    testOnly: true,
    deleted: false,
    options: [],
    permissionsRequired: [PermissionFlagsBits.SendMessages],
    botPermissions: [PermissionFlagsBits.SendMessages],

    callback: async (client, interaction) => {

        const temp = await axios.get(`hx`).catch(console.error);
        const priceUSD = temp.data[`8x`].priceUSD.toFixed(2);
        const priceADA = 0;

        // For ADA price, query mariaDB for the last price. Set to 0 while this feature is implemented.
        // This Feature currently requires me to edit the database manager functions.

        interaction.reply({
            embeds: [priceEmbeds.buildPriceEmbed(priceUSD, priceADA)],
            components: [priceButtons.buildButtons(false, null)]
        }).then((m) => {
            const collector = m.createMessageComponentCollector({time: 60000, max: 4});

            collector.on('collect', async (i) => {
                if (!i.isButton()) return;

                await i.deferUpdate();
                if (i.user.id !== interaction.user.id) return i.followUp({
                    content: `These buttons aren't for you!`,
                    ephemeral: true
                });
                if (i.customId === 'refresh') {
                    const temp = await axios.get(`x`).catch(console.error);
                    const priceUSD = temp.data[`x`].priceUSD.toFixed(2);
                    const priceADA = 0;

                    return i.editReply({
                        embeds: [priceEmbeds.buildPriceEmbed(priceUSD, priceADA)],
                    }).catch(function () {
                    })
                }
                await m.interaction.editReply({components: [priceButtons.buildButtons(true, i.customId)]})

                return i.followUp({
                    content: `Thanks for using Vyfi!`,
                    ephemeral: true
                }).catch(function () {
                });

            });
        })
    }
};