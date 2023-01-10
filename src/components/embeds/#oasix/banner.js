const { EmbedBuilder } = require("@discordjs/builders");

const BannerEmbed = new EmbedBuilder()
  .setAuthor({
    name: "Oasix",
    iconURL:
      "https://media.discordapp.net/attachments/1057743418954088519/1057743581915402340/OASIX_white_badge_-_norm.gif",
  })
  .setImage(
    "https://cdn.discordapp.com/attachments/1056881496973115432/1060092441572692008/oa62023.gif"
  );

module.exports = BannerEmbed;
