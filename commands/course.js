import 'dotenv/config'
import axios from 'axios'
import * as cheerio from 'cheerio'
import template from '../templates/anime.js'
import writeJSON from '../utils/writeJSON.js'

export default async (event) => {
  try {
    const { data } = await axios.get('https://acgsecrets.hk/bangumi/202304/')
    const $ = cheerio.load(data)
    const arr = []

    $('#acgs-anime-list .anime-type-comic').each(function (i) {
      if (i >= 12) return false
      if (!$(this).find('.anime_streams .stream-sites a').text().includes('巴哈')) {
        const bubble = JSON.parse(JSON.stringify(template))
        bubble.hero.url = $(this).find('.anime_cover_image img').attr('src')
        bubble.body.contents[0].text = $(this).find('h3.entity_localized_name').text()
        bubble.body.contents[1].contents[0].text = $(this).find('.anime_info .anime_specs .time_today').text()
        bubble.body.contents[2].contents[0].contents[0].text = $(this).find('.anime_data .anime_txts .anime_story').text() || '無'
        arr.push(bubble)
      }
    })
    const result = await event.reply({
      type: 'flex',
      altText: 'ani',
      contents: {
        type: 'carousel',
        contents: arr
      }
    })
    writeJSON({
      type: 'carousel',
      contents: arr
    }, 'animatest')
    if (result.message) {
      throw new Error(result.message)
    }
  } catch (error) {
    console.log(error)
    event.reply('發生錯誤')
  }
}
