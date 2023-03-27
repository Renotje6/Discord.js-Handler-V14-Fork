const { Client, Collection } = require('discord.js');

const client = new Client({
	intents: 32767,
});
module.exports = client;

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.contextMenus = new Collection();
client.components = new Collection();
client.modals = new Collection();
client.config = require('./config');

// Initializing the project
require('./handler')(client);

client.login(client.config.token);
