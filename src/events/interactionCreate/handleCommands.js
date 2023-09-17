const {developers, testServer} = require('../../data/config/config.json');
const getLocalCommands = require('../../utils/getLocalCommands');
module.exports = async (client, interaction) => {
    if (!interaction.isChatInputCommand()) {
        return;
    }

    const localCommands = getLocalCommands();

    try {
        const commandObject = localCommands.find(
            (cmd) => cmd.name === interaction.commandName);

        if (!commandObject) {
            return;
        }

        if (commandObject.devOnly) {
            if (!developers.includes(interaction.member.id)) {
                interaction.reply({
                    content: 'This command is only available to developers.',
                    ephemeral: true,
                });
                return;
            }
        }

        if (commandObject.testOnly) {
            if (interaction.guildId !== testServer) {
                interaction.reply({
                    content: 'This command is only available in the test server.',
                    ephemeral: true,
                });
                return;

            }
        }

        if (commandObject.permissionsRequired?.length) {
            for (const permission of commandObject.permissionsRequired) {
                if (!interaction.member.permissions.has(permission)) {
                    interaction.reply({
                        content: 'You do not have permission to run this command.',
                        ephemeral: true,
                    });
                    return;
                }
            }
        }

        if (commandObject.botPermissions?.length) {
            for (const permission of commandObject.botPermissions) {
                const bot = interaction.guild.members.me;

                if (!bot.permissions.has(permission)) {
                    interaction.reply({
                        content: "I don't have enough permissions.",
                        ephemeral: true,
                    });
                    return;
                }
            }
        }

        await commandObject.callback(client, interaction);


    } catch (error) {
        console.error(`There was an error running this command: ${error} \n ${error.stack}`);
    }
}