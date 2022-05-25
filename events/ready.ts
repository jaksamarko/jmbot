import CustomClient from "../classes/Client";

export default (client: CustomClient) => {
    console.log(`${client.user?.username} is online`);

    client.application?.commands.set(client.commands.map(v => v.data), "917542392897347665")
}