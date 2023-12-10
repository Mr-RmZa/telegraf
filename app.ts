import * as dotenv from "dotenv";
import { Telegraf } from "telegraf";
import axios from "axios";

dotenv.config();

//? Create the bot
const myBot = new Telegraf(process.env.TOKEN!);

// myBot.use((ctx) => {
//     // console.log(ctx);
//     ctx.reply(ctx.message.text);
// });

myBot.start((ctx) => {
  ctx.reply("خوش آمدی دلاور");
});

myBot.help((ctx) => {
  ctx.reply(`دستورات \n /start : خوش آمد گویی`);
});

//? Update Types
myBot.on("sticker", (ctx) => {
  ctx.reply("هه هه استیکر میفرستی");
});

// myBot.on("message", (ctx) => {
//     ctx.reply("من پیام نمی پذیرم فقط دستور");
// });

//? Custom Command
myBot.command("sayHi", (ctx) => {
  ctx.reply(`سلام ${ctx.message.text.split(" ")[1]}`);
});

//? Hear Command
myBot.hears("Mr-RmZa", (ctx) => {
  ctx.reply("بهترین مکان برای یادگیری");
});

myBot.command("todos", async (ctx) => {
  const todos = await axios.get("https://jsonplaceholder.ir/todos");
  ctx.reply(todos.data[1]);
});

//? Launch Bot
myBot.launch();
