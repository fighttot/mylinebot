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
    const arr2 = []
    const arr3 = []
    let i = 0
    $('#acgs-anime-list .anime-type-comic').each(function () {
      // if (!$(this).find('.anime_streams .stream-sites a').text().includes('巴哈')) {
      i++
      const bubble = JSON.parse(JSON.stringify(template))
      bubble.header.contents[0].contents[0].url = $(this).find('.anime_cover_image img').attr('src') || '無'
      bubble.body.contents[0].contents[0].contents[0].text = $(this).find('h3.entity_localized_name').text() || '無'
      bubble.body.contents[0].contents[0].contents[1].text = $(this).find('.anime_info .anime_specs .time_today').text() || '無'

      bubble.body.contents[0].contents[1].contents[0].contents[0].text = $(this).find('.anime_data .anime_txts .anime_story').text() || '無'
      if (i < 13) { arr.push(bubble) }
      if (i > 12 && i < 25) { arr2.push(bubble) }
      if (i > 24) { arr3.push(bubble) }
      // }
    })
    const result = await event.reply([{
      type: 'flex',
      altText: 'ani',
      contents: {
        type: 'carousel',
        contents: arr
      }
    }, {
      type: 'flex',
      altText: 'ani',
      contents: {
        type: 'carousel',
        contents: arr2
      }
    }, {
      type: 'flex',
      altText: 'ani',
      contents: {
        type: 'carousel',
        contents: arr3
      }
    }])
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
