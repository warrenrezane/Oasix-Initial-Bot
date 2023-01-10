const { SlashCommandBuilder, ActionRowBuilder } = require("discord.js");

const { BannerEmbed, WelcomeEmbed } = require("../../components/embeds/#oasix");
const {
  ServerRulesButton,
  LevelPerksButton,
} = require("../../components/buttons/#oasix");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("embed")
    .setDescription("Returns an embed."),
  async execute(interaction, client) {
    await interaction.reply({
      embeds: [BannerEmbed, WelcomeEmbed],
      components: [
        new ActionRowBuilder().addComponents(
          ServerRulesButton,
          LevelPerksButton
        ),
      ],
    });
  },
};
