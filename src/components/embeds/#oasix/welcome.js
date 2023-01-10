const { EmbedBuilder } = require("@discordjs/builders");

const WelcomeEmbed = new EmbedBuilder()
  .setTitle("Welcome to <a:OA6Logo:1052543755045060628> Oasix!")
  .setDescription(
    `**Oasix** is a friendly community server mainly offering to be your new safe haven! 
    Hang out and have fun, or even create friends and memories all in here! Head on to
    <#1056634604905308240> to verify and get access to the server.
    `
  )
  .setTimestamp()
  .setFooter({
    text: "Oasix",
    iconURL:
      "https://media.discordapp.net/attachments/1057743418954088519/1057743581915402340/OASIX_white_badge_-_norm.gif",
  });

module.exports = WelcomeEmbed;
