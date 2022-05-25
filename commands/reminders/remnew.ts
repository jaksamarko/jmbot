import { CommandInteraction} from "discord.js";
import CustomClient from "../../classes/Client";
import { Command } from "../../interfaces/Command";
const numberNames: {[key:string]: number;} = {
    "egy": 1,
    "kettő":2,"ketto":2,
    "három":3,"harom":3,
    "négy":4,"negy":4,
    "öt":5,"ot":5,
    "hat":6,
    "hét":7,"het":7,
    "nyolc":8,
    "kilenc":9,
    "tíz":10,"tiz":10
}
function parseTextNumber(str: string) {
    for(const nM in numberNames) {
        const regX = new RegExp(`(.*)\b${nM}\b(.*)`)
        str.replaceAll(regX,numberNames[nM]+"")
    }
    return str;
}

export default {
    data: {
        name: "Create a reminder",
        description: "Just say when and what",
        type: 1,
        options: [{
            name:"asd",
            description: "smg",
            type: "NUMBER",
            required: false,
            choices:[{
                name:"first",
                value: 13
            }]
        }]
    },
    run: (client: CustomClient, interaction: CommandInteraction) => {
        
        interaction.reply({content:`Button counter:`,components:[]})
    }
} as Command