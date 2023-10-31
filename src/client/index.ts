import {Client, GatewayIntentBits} from 'discord.js'
import keys from '../keys'
import {registerEvent} from '../utils'
import events from '../events'


const client = new Client({
    intents:[
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers
    ],
})

registerEvent(client,events);

client.login(keys.clientToken)
    .catch((err) => {
        console.error("[Login Failed]", err)
        process.exit(1)
    })