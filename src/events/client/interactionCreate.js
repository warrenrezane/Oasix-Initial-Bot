const LevelPerksEmbed = require("../../components/embeds/#oasix/level-perks");
const ServerRuleEmbed = require("../../components/embeds/#oasix/server-rules");

module.exports = {
  name: "interactionCreate",
  async execute(interaction, client) {
    if (interaction.isChatInputCommand()) {
      const { commands } = client;
      const { commandName } = interaction;
      const command = commands.get(commandName);

      if (!command) return;

      try {
        await command.execute(interaction, client);
      } catch (error) {
        console.error(error);
        await interaction.reply({
          content: `Something went wrong while executing this command.`,
          ephemeral: true,
        });
      }
    }

    if (interaction.isButton()) {
      switch (interaction.customId) {
        case "server-rules":
          try {
            await interaction.reply({
              embeds: [ServerRuleEmbed],
              ephemeral: true,
            });
          } catch (error) {
            await interaction.reply({
              content: "Something went wrong while executing this command.",
              ephemeral: true,
            });
          }
          break;

        case "level-perks":
          try {
            await interaction.reply({
              embeds: [LevelPerksEmbed],
              ephemeral: true,
            });
          } catch (error) {
            await interaction.reply({
              content: "Something went wrong while executing this command.",
              ephemeral: true,
            });
          }
          break;

        default:
          try {
            await interaction.reply({
              content: "There's no command with that keyword.",
              ephemeral: true,
            });
          } catch (error) {
            await interaction.reply({
              content: "Something went wrong while executing this command.",
              ephemeral: true,
            });
          }

          break;
      }
    }
  },
};
