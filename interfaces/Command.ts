import { ApplicationCommandOption, ChatInputApplicationCommandData } from "discord.js"

export interface Command extends ChatInputApplicationCommandData {
    data: {
        name: string,
        description: string,
        type?: number,
        options?: ApplicationCommandOption[]
    },
    permission?: string[],
    run(...args:any): any
}