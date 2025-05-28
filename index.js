import { configDotenv } from "dotenv";
import { Telegraf, Markup } from "telegraf";

configDotenv();

// Create a new bot instance
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply("Click /remove to remove keyboard");
});
// Handle text messages
bot.command("remove", async (ctx) => {
  await ctx.reply("Keyboard removed", Markup.removeKeyboard());
});

bot.launch();
