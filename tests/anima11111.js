import axios from 'axios'
import * as cheerio from 'cheerio'
// import fs from 'fs'

const main = async () => {
  try {
    const { data } = await axios.get('https://acgsecrets.hk/bangumi/202304/')
    const $ = cheerio.load(data)
    $('#acgs-anime-list .anime-type-comic').each(function () {
      if (!$(this).find('.anime_streams .stream-sites a').text().includes('巴哈')) {
        console.log($(this).find('h3.entity_localized_name').text())
        console.log($(this).find('.anime_cover_image img').attr('src'))
        console.log($(this).find('.anime_info .anime_specs .time_today').text())
        console.log($(this).find('.anime_data .anime_txts .anime_story').text())
      }
    })
    // .hasClass
    // console.log($('.with-top-margin a').attr('href'))
    // console.log($('.anime-type-comic a').attr('href'))
    // console.log($('.anime-type-comic a .anime_bg img').attr('src'))
    // console.log($('.anime-type-comic a .anime_text .anime_name').text())
    // console.log($('.anime-genre-Comedy a .anime_text .anime_name').text())
    // console.log($('#acgs-anime-icons .anime-type-comic a .anime_name').text())
    // console.log($('#acgs-anime-icons a .anime_bg~.anime_text .anime_name').text())
    // console.log($('.anime-genre-Comedy a .anime_bg img').attr('src'))
    // console.log($('.anime-type-comic a .anime_airtime .day').text())
    // $('#acgs-anime-list')
    // $('#acgs-anime-list .anime-type-comic ')
    // if (!fs.existsSync('./dump')) {
    //   fs.mkdirSync('./dump')
    // }

    // fs.writeFileSync('./dump/fe.json', JSON.stringify($('.nospan p a').text))
  } catch (error) {
    console.log(error)
  }
}

main()
