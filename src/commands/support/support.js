const {
    PermissionFlagsBits
} = require('discord.js');

const supportEmbeds = require('../../utils/commandutils/support/supportEmbeds');
const supportButtons = require('../../utils/commandutils/support/supportButtons');


module.exports = {
    name: 'support',
    description: 'View ways to get support for VyFi',
    devOnly: false,
    testOnly: false,
    deleted: false,
    options: [],
    permissionsRequired: [PermissionFlagsBits.SendMessages],
    botPermissions: [PermissionFlagsBits.SendMessages],

    callback: async (client, interaction) => {
        try {
            const supportEmbed = supportEmbeds.buildSupportEmbed();
            const furtherSupportEmbed = supportEmbeds.buildFurtherSupportEmbed();

            const initialResponse = await interaction.reply({
                embeds: [supportEmbed],
                components: [supportButtons.buildButtons(false, null)]
            });

            const collector = initialResponse.createMessageComponentCollector({time: 60000});

            collector.on('collect', async (i) => {
                if (i.isButton()) {
                    await i.deferUpdate();
                    if (i.user.id !== interaction.user.id) {
                        return i.followUp({
                            content: `These buttons aren't for you!`,
                            ephemeral: true
                        });
                    }
                    if (i.customId === 'more') {
                        await i.followUp({
                            embeds: [furtherSupportEmbed],
                            ephemeral: true
                        });
                    }
                    // await initialResponse.editReply({components: [supportButtons.buildButtons(true, i.customId)]});

                    // The above throws an error, not entirely sure why this code is here in the first place
                    // Going to keep removed until something reminds me why I put it here. Direct from old codebase.

                    //await i.followUp({
                    //    content: `Thanks for using the Vyfi support bot!`,
                    //   ephemeral: true
                    //});
                }
            });
        } catch (error) {
            console.error('Error:', error);
        }
    }
};