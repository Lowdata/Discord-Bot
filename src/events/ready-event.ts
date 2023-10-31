import { event } from "../utils";


export default event('ready', ({log}, client) => {
    log(`Logged In as ${client.user.tag}`)
})