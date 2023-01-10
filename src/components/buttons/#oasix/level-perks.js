const { ButtonBuilder, ButtonStyle } = require("discord.js");

const LevelPerksButton = new ButtonBuilder()
  .setCustomId("level-perks")
  .setLabel("Level Perks")
  .setStyle(ButtonStyle.Secondary)
  .setEmoji("1049863370330869843");

module.exports = LevelPerksButton;
