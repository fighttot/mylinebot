import 'dotenv/config'
import linebot from 'linebot'
import course from './commands/course.js'
import novel from './commands/novel.js'
import original from './commands/original.js'
import BHcontinueani from './commands/BHcontinueani.js'
import continueani from './commands/continueani.js'
import BHnewani from './commands/BHnewani.js'
import newani from './commands/newani.js'
import BHdayss from './commands/BHdayss.js'
import dayss from './commands/dayss.js'

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})
bot.on('message', event => {
  if (event.message.type === 'text' && event.message.text === '巴哈續作') {
    BHcontinueani(event)
  } else if (event.message.type === 'text' && event.message.text === '續作') {
    continueani(event)
  } else if (event.message.type === 'text' && event.message.text === '巴哈新作') {
    BHnewani(event)
  } else if (event.message.type === 'text' && event.message.text === '新作') {
    newani(event)
  } else if (event.message.type === 'text' && event.message.text === '巴哈今天') {
    BHdayss(event)
  } else if (event.message.type === 'text' && event.message.text === '今天') {
    dayss(event)
  } else if (event.message.type === 'text' && event.message.text === '漫畫') {
    course(event)
  } else if (event.message.type === 'text' && event.message.text === '小說') {
    novel(event)
  } else if (event.message.type === 'text' && event.message.text === '原創') {
    original(event)
  }
})
bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人已開啟')
})
