import {
Awaitable,
Client,
ChatInputCommandInteraction,
SlashCommandBuilder
} from 'discord.js'
type LoggerFunction = (...args: unknown[]) => void
export  interface CommandProps{
    client: Client,
    interacton:ChatInputCommandInteraction,
    log: LoggerFunction
}

export type CommandExec = (props:CommandProps ) => Awaitable<unknown>
export type CommandMeta = 
| SlashCommandBuilder 
| Omit<SlashCommandBuilder, "addSubCommand" | "addSubCommandGroup">

export interface Command {
    meta: CommandMeta
    exec: CommandExec
  }
  
  export interface CommandCategory {
    name: string
    commands: Command[]
  }