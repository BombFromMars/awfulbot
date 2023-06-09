const TelegramBot = require('node-telegram-bot-api');
const fs = require ('fs')

// replace the value below with the Telegram token you receive from @BotFather
const token = '6093235094:AAFtQQsAYzLYnc3NHepiMce9I-rW26p2Yxc';
let posted = false
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
let data = fs.readFileSync('./frogs.json')
let frogsRaw = JSON.parse(data)
let frogs_arr = frogsRaw.links

    if (new Date().getDay() == 5 && new Date().getHours() > 14 &&  new Date().getHours() < 22 && posted != true) 
{
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'It is wednesday. my dudes! '+ frogs_arr[getRandomInt(frogs_arr.length)]); 
});
posted = true
console.log(posted)}
    if (new Date().getDay() != 5)
    posted = false;
