import { CommandInteraction, MessageActionRow, MessageButton} from "discord.js";
import CustomClient from "../../classes/Client";
import { Command } from "../../interfaces/Command";

export default {
    data: {
        name: "ping",
        description: "Test",
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
        const components = [];
        let content = "Buttons counter:\n";
        for(let i=0;i<3;i++) {
            components.push(new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId(`bt${i}`)
					.setLabel(`Button ${i}`)
					.setStyle('PRIMARY'),
			));
            content+=`bt${i}: 0\n`
        }
        interaction.reply({content:`Button counter:`,components:components})
    }
} as Command