import axios from 'axios'
import * as cheerio from 'cheerio'
// import fs from 'fs'

const main = async () => {
  try {
    const { data } = await axios.get('https://acgsecrets.hk/bangumi/202304/')
    const $ = cheerio.load(data)
    // const cdate = new Date()
    $('#acgs-anime-list .acgs-anime-block').each(function () {
      if ($(this).find('.anime_streams .stream-sites a').text().includes('巴哈')) {
        // console.log($(this).find('.anime_cover_image img').attr('src'))
        // console.log($(this).find('h3.entity_localized_name').text())
        // console.log($(this).find('.anime_info .anime_specs .anime_tag tags').text())
        // console.log($(this).find('.anime_data .anime_streams .stream-area .stream-sites a').text())
        if ($(this).find('.anime_data .anime_streams span').text().includes('台灣')) {
          console.log($(this).find('.anime_data .stream-sites:nth-child(2) a').text())
        }
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
