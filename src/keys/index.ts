import { Keys } from "../types";

const keys: Keys = {
    clientToken: process.env.CLIENT_TOKEN ?? "null",
}

if(Object.values(keys).includes("null"))
    throw new Error('Not all ENV variables are defined!');

export default keys;