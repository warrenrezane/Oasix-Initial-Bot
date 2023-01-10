const { ButtonBuilder, ButtonStyle } = require("discord.js");

const ServerRulesButton = new ButtonBuilder()
  .setCustomId("server-rules")
  .setLabel("Server Rules")
  .setStyle(ButtonStyle.Secondary)
  .setEmoji("1061922449245081630");

module.exports = ServerRulesButton;
