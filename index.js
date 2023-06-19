import 'dotenv/config'
import linebot from 'linebot'
import course from './commands/course.js'

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})
bot.on('message', event => {
  if (event.message.type === 'text') {
    try {
      course(event)
      // event.reply('沒問題')
    } catch (error) {
      console.log(error)
      event.reply('發生錯誤')
    }
  }
})
bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人已開啟')
})
