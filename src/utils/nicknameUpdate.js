const {default: axios} = require('axios');
const coinSymbol = `VYFI`
const {PermissionsBitField} = require('discord.js');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function validateRoles(guild) {
    if (guild.members.me.permissions.has(PermissionsBitField.Flags.ManageRoles)) {
    } else {
        console.error(`${coinSymbol}: Client is missing permission 'MANAGE_ROLES' in Guild '${guild.name}'`);
    }

    let green = guild.roles.cache.find(({name}) => name === 'tickers-green') ?? null;
    let red = guild.roles.cache.find(({name}) => name === 'tickers-red') ?? null;

    if (!green)
        green = await guild.roles.create({name: 'tickers-green', color: '#00FF12'}).catch(() => null);

    if (!red)
        red = await guild.roles.create({name: 'tickers-red', color: '#C52626'}).catch(() => null);

    return new Map([['green', green], ['red', red]]);
}


async function updateNicknames(client) {
    const res = await axios.get(process.env.priceAPI).catch(console.error);

    if (!res)
        return setTimeout(() => {
            updateNicknames();
        }, 500000);
    //console.log(res)
    const price_change_24h = 0;
    const current_price = res.data[`804f5544c1962a40546827cab750a88404dc7108c0f588b72964754f-56594649`].priceUSD;

    for (const guild of client.guilds.cache.values()) {
        await sleep(1500);
        if (guild.members.me.permissions.has(PermissionsBitField.Flags.ChangeNickname))
            guild.members.me.setNickname(`VYFI ${price_change_24h >= 0 ? '⬈' : '⬊'} ${(current_price).toFixed(2)}$`)
                .catch(err => console.error(`${coinSymbol}: Could not change nickname in Guild '${guild.name}': ${err}`));

        if (guild.members.me.permissions.has(PermissionsBitField.Flags.ManageRoles)) {
            const roles = await validateRoles(guild)
                .catch(console.error);

            if (!roles)
                continue;

            if (price_change_24h >= 0 && !guild.members.me.roles.cache.find(({name}) => name === 'tickers-green'))
                guild.members.me.roles.add(roles.get('green'))
                    .catch(err => console.error(`${coinSymbol}: Could not add roles in Guild '${guild.name}': ${err}`));


            if (price_change_24h < 0 && !guild.members.me.roles.cache.find(({name}) => name === 'tickers-red'))
                guild.members.me.roles.add(roles.get('red'))
                    .catch(err => console.error(`${coinSymbol}: Could not add roles in Guild '${guild.name}': ${err}`));

            if (price_change_24h >= 0 && !guild.members.me.roles.cache.find(({name}) => name === 'tickers-green'))
                guild.members.me.roles.remove(roles.get('red'))
                    .catch(err => console.error(`${coinSymbol}: Could not add roles in Guild '${guild.name}': ${err}`));


            if (price_change_24h < 0 && !guild.members.me.roles.cache.find(({name}) => name === 'tickers-red'))
                guild.members.me.roles.remove(roles.get('green'))
                    .catch(err => console.error(`${coinSymbol}: Could not add roles in Guild '${guild.name}': ${err}`));

        }
    }

    setTimeout(() => {
        updateNicknames(client);
    }, 60000);
}

module.exports = updateNicknames;