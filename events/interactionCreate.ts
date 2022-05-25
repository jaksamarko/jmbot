import { CommandInteraction } from "discord.js";
import CustomClient from "../classes/Client";

export default (client: CustomClient, interaction: CommandInteraction) => {
    if(!interaction.isCommand()) {
        var breakp=1;
        return;
    };

    const command = client.commands.get(interaction.commandName);
    if(!command) return;
    try {
        command.run(client,interaction)
    } catch(e) {
        if(interaction.replied) interaction.followUp(`Error: ${e}`)
        else interaction.reply(`Error: ${e}`)
    }
}