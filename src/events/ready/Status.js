const axios = require('axios')
const nicknameUpdate = require('../../utils/nicknameUpdate')
const memberCount = require('../../utils/memberCountChannel')
i = 0
module.exports = async (client) => {
    try {

        await nicknameUpdate(client)
        // Set status to DND
        client.user.setStatus(`dnd`)
        // Set the initial status
        client.user.setActivity({
            name: `Starting up... | ${client.users.cache.size} Users`,
            type: 0
        })

        // grab VyFi Data every minute
        setInterval(async () => {
            try {
                const price = await axios.get(process.env.priceAPI).catch(console.error);
                const current_price_USD = price.data[`804f5544c1962a40546827cab750a88404dc7108c0f588b72964754f-56594649`].priceUSD;

                const activities = [{
                    name: `Price: ${current_price_USD.toFixed(2)}$ | VyFi.io`,
                    type: 0
                }, {
                    name: `VyFi.io`,
                    type: 3
                }];


                if (i >= activities.length) i = 0
                console.log(`Setting activity to ${activities[i].name}`)
                client.user.setActivity(activities[i])
                i++;
            } catch (error) {
                console.log(error)
            }

        }, 60000);

    } catch (error) {
        console.log(`Error in 02Status.js: ${error}\n ${error.stack}`)

    }

    try {
        setInterval(async () => {
            await memberCount(client);
        }, 120000);
    } catch (error) {
        console.log(`Error in 02Status.js: ${error}\n ${error.stack}`)
    }

}