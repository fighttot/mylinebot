import axios from 'axios'
import * as cheerio from 'cheerio'
import templates from '../templates/anime.js'
// import fs from 'fs'

const main = async () => {
  try {
    const bubble = JSON.parse(JSON.stringify(templates))
    const { data } = await axios.get('https://acgsecrets.hk/bangumi/202304/')
    const $ = cheerio.load(data)
    $('#acgs-anime-list .anime-type-comic').each(function () {
      if (!$(this).find('.anime_streams .stream-sites a').text().includes('巴哈')) {
        console.log($(this).find('h3.entity_localized_name').text())
      }
    })
  } catch (error) {
    console.log(error)
  }
}

main()
