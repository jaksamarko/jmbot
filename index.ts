import * as dotenv from "dotenv";
import {join} from "path"
import {readdirSync} from "fs";
import CustomClient from "./classes/Client";
dotenv.config()

const client = new CustomClient({
    intents: ["GUILDS"]
})

client.on('ready',()=>{
    console.log("At least started..")
})

readdirSync(join(__dirname,"./events")).forEach(f=>{
    client.on(f.split(".")[0],async (...args)=>(await import(`./events/${f}`)).default(client, ...args));
})
readdirSync(join(__dirname,`./commands`)).forEach(categ=>{
    readdirSync(join(__dirname,`./commands/${categ}`)).forEach(async comm=>{
        const command = (await import(`./commands/${categ}/${comm}`)).default;

        if(!command) {
            console.log(`Problem with ${categ}/${comm}`)
        } else {
            client.commands.set(command.data.name, command)
        }
    })
})
client.login(process.env.TOKEN)